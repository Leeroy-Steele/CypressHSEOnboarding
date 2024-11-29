const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require("cors");
const { exec } = require('child_process');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors()); // Enable CORS for all routes

const serverPort = 3000
const serverURL = `http://localhost:${serverPort}`

// Serve formV3.html from the root directory
app.get('/', (req, res) => {
  const filePath = path.join(__dirname, 'form.html');
  res.sendFile(filePath);
});

// Open the webpage form in the default browser
exec(`start ${serverURL}`);

// This is triggered from the `Start Automation` button on the UI form
app.post('/download', (req, res) => {

  // Get form info from request body
  const {
    TicketID,
    Environment,

    companyName,
    companyAddress,
    isMTA,
    numberOfEmployees,

    mainContactFirstName,
    mainContactLastName,
    mainContactEmail,
    mainContactPhoneNumber,
    mainContactMobileNumber,
    mainContactUsername,
    mainContactPassword,

    ...rest
  } = req.body;

  console.log("Environment is: " + Environment)

  // Get Super User PW from PA. Flow is here -> `https://make.powerautomate.com/environments/2e21e621-fcf3-eae1-a4d1-9e02b3152fc8/flows/96d7de0a-c2fb-4a1b-940e-e541d79058b4/runs/08584732557519775569424720085CU26`
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const jsonBody = JSON.stringify({
    "Name": "",
    "Email": "",
    "TicketID": 0,
    "Task": "Get Super User PW",
    "Note": "",
    "Env": `${Environment === "Production" ? process.env.HSE_PROD_URL : process.env.HSE_PREV_URL}`,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: jsonBody,
    redirect: "follow"
  };

  fetch("https://prod-19.australiasoutheast.logic.azure.com:443/workflows/ece9c78292324b17bf0c8f68f010cb6b/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=WLYxCqqlzpQMLo4-YVwIdiApsi5FIqCZvMrFLNA4A4U", requestOptions)
    .then((resp) => resp.json())
    .then((respOb) => {
      let superUserPW = respOb.PW

      // Create department compare logic here (Work out if each employee is being created in a new department or existing department)
      let departmentArr = []
      for (let i = 1; i <= numberOfEmployees; i++) {
        departmentArr.push(rest[`employee${i}Department`])
      }
      let previousMatchingDepartments = new Set();
      let employeeDepartmentsArray = departmentArr.map(str => {
        let isMatch = previousMatchingDepartments.has(str);
        previousMatchingDepartments.add(str);
        return { string: str, isMatch };
      })

      // Add Due date for trainings (4 weeks from now)
      function getDateFourWeeksFromNow() {
        const today = new Date();
        const fourWeeksFromNow = new Date(today);

        // Add 4 weeks (28 days)
        fourWeeksFromNow.setDate(today.getDate() + 28);

        // Format the date to DD-MM-YYYY
        const day = String(fourWeeksFromNow.getDate()).padStart(2, '0');
        const month = String(fourWeeksFromNow.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
        const year = fourWeeksFromNow.getFullYear();
        return `${day}-${month}-${year}`;
      }

      // Create the cypress.config.js content dynamically
      function generateEmployeeInfo(employeeDepartmentsArray) {
        let employeeInfo = "";

        for (let i = 1; i <= numberOfEmployees; i++) {
          const employeeEmail = rest[`employee${i}Email`] !== null ? `${rest[`employee${i}Email`]}` : '';
          employeeInfo += `
        // Employee ${i} info:
        Employee${i}_NAME: "${rest[`employee${i}Name`]}",
        Employee${i}_LOGIN_NAME: "${rest[`employee${i}LoginName`]}",
        Employee${i}_EMAIL: "${employeeEmail}", 
        Employee${i}_DEPARTMENT: "${rest[`employee${i}Department`]}",  
        Employee${i}_DEPARTMENT_ALREADY_EXISTS: "${employeeDepartmentsArray[i - 1].isMatch}",
        Employee${i}_IS_MANAGER: ${rest[`employee${i}IsManager`]}, 
        Employee${i}_Create_In_LB: ${rest[`employee${i}CreateInLB`]},  
      `;
        }

        return employeeInfo.trim();
      }

      const dynamicEmployeeInfo = generateEmployeeInfo(employeeDepartmentsArray);
      const configContent = `

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    //// CONSTANTS ////
      //  HSE URL
      HSE_URL: '${Environment === "Production" ? process.env.HSE_PROD_URL : process.env.HSE_PREV_URL}',

      //  user logins
      HSE_SUPER_USER_LOGIN_NAME: '${Environment === "Production" ? process.env.HSE_PROD_SUPERUSER_LOGIN : process.env.HSE_PREV_SUPERUSER_LOGIN}',

      //  login passwords
      HSE_SUPER_USER_PW: '${superUserPW}',

    //// VARIABLES FROM ONBOARDING FORM////

      // Onboarding Ticket ID
      TicketID: "${TicketID}",

      // Company info
      COMPANY_NAME: "${companyName}",
      COMPANY_ADDRESS: "${companyAddress}",

      // Main contact
      MAIN_CONTACT_FIRST_NAME: "${mainContactFirstName}",
      MAIN_CONTACT_LAST_NAME: "${mainContactLastName}",
      MAIN_CONTACT_EMAIL: "${mainContactEmail}",
      MAIN_CONTACT_PHONE_NUMBER: "${mainContactPhoneNumber}",
      MAIN_CONTACT_MOBILE_NUMBER: "${mainContactMobileNumber}",
      MAIN_CONTACT_USERNAME: "${mainContactUsername}",
      MAIN_CONTACT_PASSWORD: "${mainContactPassword}",

      // Is MTA
      IS_MTA: ${isMTA},
      TRAINING_DUE_DATE: '${getDateFourWeeksFromNow()}',

      // Number of employees
      NUMBER_OF_EMPLOYEES: ${numberOfEmployees},

      ${dynamicEmployeeInfo}
  },
});
`;

      // Create a duplicate cypress.config file without passwords for archiving purposes
      const duplicateConfigContent = `

  //// CONSTANTS ////
    //  HSE URL
    HSE_URL: '${Environment === "Production" ? process.env.HSE_PROD_URL : process.env.HSE_PREV_URL}',

    //  user logins
    HSE_SUPER_USER_LOGIN_NAME: '${Environment === "Production" ? process.env.HSE_PROD_SUPERUSER_LOGIN : process.env.HSE_PREV_SUPERUSER_LOGIN}',

    //  user passwords
    HSE_SUPER_USER_PW: 'Redacted from file',

  //// VARIABLES FROM ONBOARDING FORM////

    // Onboarding Ticket ID
    TicketID: "${TicketID}",

    // Company info
    COMPANY_NAME: "${companyName}",
    COMPANY_ADDRESS: "${companyAddress}",

    // Main contact
    MAIN_CONTACT_FIRST_NAME: "${mainContactFirstName}",
    MAIN_CONTACT_LAST_NAME: "${mainContactLastName}",
    MAIN_CONTACT_EMAIL: "${mainContactEmail}",
    MAIN_CONTACT_PHONE_NUMBER: "${mainContactPhoneNumber}",
    MAIN_CONTACT_MOBILE_NUMBER: "${mainContactMobileNumber}",
    MAIN_CONTACT_USERNAME: "${mainContactUsername}",
    MAIN_CONTACT_PASSWORD: 'Redacted from file',

    // Is MTA
    IS_MTA: ${isMTA},
    TRAINING_DUE_DATE: '${getDateFourWeeksFromNow()}',

    // Number of employees
    NUMBER_OF_EMPLOYEES: ${numberOfEmployees},

    ${dynamicEmployeeInfo}

`;

      // Define the path where the cypress.config.js file will be saved
      const filePath = path.join(__dirname, 'cypress.config.js');
      const file2Path = path.join(__dirname, `/PreviousRuns/${companyName}_cypressConfigCopy.txt`);

      // Write the content to the file
      fs.writeFile(filePath, configContent, (err) => {
        if (err) {
          return res.status(500).send("Error generating the cypress.config file");
        } else {
          console.log("Created Cypress.config.js file")
        }

        fs.writeFile(file2Path, duplicateConfigContent, (err) => {
          if (err) {
            return res.status(500).send("Error generating the copy of cypress.config file");
          } else {
            console.log("Created duplicate Cypress.config.js file in the 'PreviousRuns' folder for archiving purposes")
          }
        })

      });

      console.log("Starting Cyress.io automation in another window. You can close this when cypress is finished all tasks")

      // run cypressio
      exec('npm run HSEOnBoard', (error, stdout, stderr) => {
        if (error) {
          console.error(`Error: ${error.message}`);
          return;
        }
        if (stderr) {
          console.error(`Stderr: ${stderr}`);
          return;
        }
        console.log(`Output: ${stdout}`);
      });

    })
    .catch((error) => { console.error(error) });

});

// remove cypress.config after automation is complete
app.post('/removeConfigFile', (req, res) => {
  fs.unlinkSync('cypress.config.js');
  res.status(200)
});

app.listen(serverPort, () => {
  console.log(`Server is running on ${serverURL}`);
});

