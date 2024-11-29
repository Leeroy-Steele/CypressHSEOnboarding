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


console.log("Environment is: "+Environment)

// Create department compare logic here
let departmentArr = [rest['employee1Department'], rest['employee2Department'],rest['employee3Department'],rest['employee4Department'],rest['employee5Department'],rest['employee6Department'],rest['employee7Department'],rest['employee8Department'],rest['employee9Department'],rest['employee10Department'],rest['employee11Department'],rest['employee12Department'],rest['employee13Department'],rest['employee14Department'],rest['employee15Department'],rest['employee16Department'],rest['employee17Department'],rest['employee18Department'],rest['employee19Department'],rest['employee20Department'],rest['employee21Department'],rest['employee22Department'],rest['employee22Department'],rest['employee23Department'],rest['employee24Department'],rest['employee25Department']]
let previousMatchingDepartments = new Set();

let employeeDepartmentsArray = departmentArr.map(str => {
  let isMatch = previousMatchingDepartments.has(str);
  previousMatchingDepartments.add(str);
  return { string: str, isMatch };
})

console.log(employeeDepartmentsArray)


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
  function generateEmployeeInfo( employeeDepartmentsArray) {
    let employeeInfo = "";

    for (let i = 1; i <= numberOfEmployees; i++) {
      const employeeEmail = rest[`employee${i}Email`]!==null?`${rest[`employee${i}Email`]}`:'';
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
      HSE_URL: '${Environment==="Production" ?  process.env.HSE_PROD_URL:process.env.HSE_PREV_URL}',

      //  user logins
      HSE_SUPER_USER_LOGIN_NAME: '${Environment==="Production" ? process.env.HSE_PROD_SUPERUSER_LOGIN : process.env.HSE_PREV_SUPERUSER_LOGIN}',

      //  user passwords
      HSE_SUPER_USER_PW: '${Environment==="Production" ? process.env.HSE_PROD_SUPERUSER_PW : process.env.HSE_PREV_SUPERUSER_PW}',

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
    HSE_URL: '${Environment==="Production" ?  process.env.HSE_PROD_URL:process.env.HSE_PREV_URL}',

    //  user logins
    HSE_SUPER_USER_LOGIN_NAME: '${Environment==="Production" ? process.env.HSE_PROD_SUPERUSER_LOGIN : process.env.HSE_PREV_SUPERUSER_LOGIN}',

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
    }else{
      console.log("Created Cypress.config.js file")
    }

    fs.writeFile(file2Path, duplicateConfigContent, (err) => {
      if (err) {
        return res.status(500).send("Error generating the copy of cypress.config file");
      }else{
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


});

// remove cypress.config after automation is complete
app.post('/removeConfigFile', (req, res) => {
  fs.unlinkSync('cypress.config.js');
  res.status(200)
});

app.listen(serverPort, () => {
  console.log(`Server is running on ${serverURL}`);
});

