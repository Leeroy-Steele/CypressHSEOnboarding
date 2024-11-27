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

    employee1Name,
    employee1LoginName,
    employee1Email,
    employee1Department,
    employee1IsManager,

    employee2Name,
    employee2LoginName,
    employee2Email,
    employee2Department,
    employee2IsManager,

    employee3Name,
    employee3LoginName,
    employee3Email,
    employee3Department,
    employee3IsManager,

    employee4Name,
    employee4LoginName,
    employee4Email,
    employee4Department,
    employee4IsManager,

    employee5Name,
    employee5LoginName,
    employee5Email,
    employee5Department,
    employee5IsManager,

    employee6Name,
    employee6LoginName,
    employee6Email,
    employee6Department,
    employee6IsManager,

    employee7Name,
    employee7LoginName,
    employee7Email,
    employee7Department,
    employee7IsManager,

    employee8Name,
    employee8LoginName,
    employee8Email,
    employee8Department,
    employee8IsManager,

    employee9Name,
    employee9LoginName,
    employee9Email,
    employee9Department,
    employee9IsManager,

    employee10Name,
    employee10LoginName,
    employee10Email,
    employee10Department,
    employee10IsManager,

    employee11Name,
    employee11LoginName,
    employee11Email,
    employee11Department,
    employee11IsManager,

    employee12Name,
    employee12LoginName,
    employee12Email,
    employee12Department,
    employee12IsManager,

    employee13Name,
    employee13LoginName,
    employee13Email,
    employee13Department,
    employee13IsManager,

    employee14Name,
    employee14LoginName,
    employee14Email,
    employee14Department,
    employee14IsManager,

    employee15Name,
    employee15LoginName,
    employee15Email,
    employee15Department,
    employee15IsManager,

    employee16Name,
    employee16LoginName,
    employee16Email,
    employee16Department,
    employee16IsManager,

    employee17Name,
    employee17LoginName,
    employee17Email,
    employee17Department,
    employee17IsManager,

    employee18Name,
    employee18LoginName,
    employee18Email,
    employee18Department,
    employee18IsManager,

    employee19Name,
    employee19LoginName,
    employee19Email,
    employee19Department,
    employee19IsManager,

    employee20Name,
    employee20LoginName,
    employee20Email,
    employee20Department,
    employee20IsManager,

    employee21Name,
    employee21LoginName,
    employee21Email,
    employee21Department,
    employee21IsManager,

    employee22Name,
    employee22LoginName,
    employee22Email,
    employee22Department,
    employee22IsManager,

    employee23Name,
    employee23LoginName,
    employee23Email,
    employee23Department,
    employee23IsManager,

    employee24Name,
    employee24LoginName,
    employee24Email,
    employee24Department,
    employee24IsManager,

    employee25Name,
    employee25LoginName,
    employee25Email,
    employee25Department,
    employee25IsManager,

  } = req.body;

console.log("Environment is: "+Environment)

// Create department compare logic here
let departmentArr = [employee1Department, employee2Department,employee3Department,employee4Department,employee5Department,employee6Department,employee7Department,employee8Department,employee9Department,employee10Department, employee11Department,employee12Department,employee13Department,employee14Department,employee15Department,employee16Department,employee17Department,employee18Department,employee19Department,employee20Department,employee21Department,employee22Department,employee23Department,employee24Department,employee25Department]
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
  function generateEmployeeInfo( employeeDepartmentsArray) {
    let employeeInfo = "";
  
    for (let i = 1; i <= numberOfEmployees; i++) {
      employeeInfo += `
        // Employee ${i} info:
        Employee${i}_NAME: "${eval(`employee${i}Name`)}",
        Employee${i}_LOGIN_NAME: "${eval(`employee${i}LoginName`)}",
        Employee${i}_EMAIL: "${eval(`employee${i}Email`)!==""?eval(`employee${i}Email`):" "}",
        Employee${i}_DEPARTMENT: "${eval(`employee${i}Department`)}",
        Employee${i}_DEPARTMENT_ALREADY_EXISTS: "${employeeDepartmentsArray[i - 1].isMatch}",
        Employee${i}_IS_MANAGER: ${eval(`employee${i}IsManager`)},
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

