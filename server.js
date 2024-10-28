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
const HSEPreviewURL = `http://hseconnect.previewourapp.com/Login`
// const HSEProductionURL = `https://www.hseconnect.co.nz/login`
const HSEProductionURL = `https://www.google.com`

console.log(process.env.HSE_PREV_SUPERUSER_PW)

// Serve formV3.html from the root directory
app.get('/', (req, res) => {
  const filePath = path.join(__dirname, 'formV3.html');
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
    employee1Email,
    employee1Department,
    employee1IsManager,

    employee2Name,
    employee2Email,
    employee2Department,
    employee2IsManager,

    employee3Name,
    employee3Email,
    employee3Department,
    employee3IsManager,

    employee4Name,
    employee4Email,
    employee4Department,
    employee4IsManager,

    employee5Name,
    employee5Email,
    employee5Department,
    employee5IsManager,

    employee6Name,
    employee6Email,
    employee6Department,
    employee6IsManager,

    employee7Name,
    employee7Email,
    employee7Department,
    employee7IsManager,

    employee8Name,
    employee8Email,
    employee8Department,
    employee8IsManager,

    employee9Name,
    employee9Email,
    employee9Department,
    employee9IsManager,
  } = req.body;

console.log("Environment is: "+Environment)

  // Create the cypress.config.js content dynamically
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
      HSE_URL: '${Environment==="Production" ? HSEProductionURL:HSEPreviewURL}',

      //  user logins
      HSE_SUPER_USER_LOGIN_NAME: '${Environment==="Production" ? process.env.HSE_PROD_SUPERUSER_LOGIN : process.env.HSE_PREV_SUPERUSER_LOGIN}',

      //  user passwords
      HSE_SUPER_USER_PW: '${Environment==="Production" ? process.env.HSE_PROD_SUPERUSER_PW : process.env.HSE_PREV_SUPERUSER_PW}',

    //// VARIABLES ////

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

      // Number of employees
      NUMBER_OF_EMPLOYEES: ${numberOfEmployees},

      // Employee 1 info
      Employee1_NAME: "${employee1Name}",
      Employee1_EMAIL: "${employee1Email}",
      Employee1_DEPARTMENT: "${employee1Department}",
      Employee1_IS_MANAGER: ${employee1IsManager},

      // Employee 2 info
      Employee2_NAME: "${employee2Name}",
      Employee2_EMAIL: "${employee2Email}",
      Employee2_DEPARTMENT: "${employee2Department}",
      Employee2_IS_MANAGER: ${employee2IsManager},

      // Employee 3 info
      Employee3_NAME: "${employee3Name}",
      Employee3_EMAIL: "${employee3Email}",
      Employee3_DEPARTMENT: "${employee3Department}",
      Employee3_IS_MANAGER: ${employee3IsManager},

      // Employee 4 info
      Employee4_NAME: "${employee4Name}",
      Employee4_EMAIL: "${employee4Email}",
      Employee4_DEPARTMENT: "${employee4Department}",
      Employee4_IS_MANAGER: ${employee4IsManager},

      // Employee 5 info
      Employee5_NAME: "${employee5Name}",
      Employee5_EMAIL: "${employee5Email}",
      Employee5_DEPARTMENT: "${employee5Department}",
      Employee5_IS_MANAGER: ${employee5IsManager},

      // Employee 6 info
      Employee6_NAME: "${employee6Name}",
      Employee6_EMAIL: "${employee6Email}",
      Employee6_DEPARTMENT: "${employee6Department}",
      Employee6_IS_MANAGER: ${employee6IsManager},

      // Employee 7 info
      Employee7_NAME: "${employee7Name}",
      Employee7_EMAIL: "${employee7Email}",
      Employee7_DEPARTMENT: "${employee7Department}",
      Employee7_IS_MANAGER: ${employee7IsManager},

      // Employee 8 info
      Employee8_NAME: "${employee8Name}",
      Employee8_EMAIL: "${employee8Email}",
      Employee8_DEPARTMENT: "${employee8Department}",
      Employee8_IS_MANAGER: ${employee8IsManager},

      // Employee 9 info
      Employee9_NAME: "${employee9Name}",
      Employee9_EMAIL: "${employee9Email}",
      Employee9_DEPARTMENT: "${employee9Department}",
      Employee9_IS_MANAGER: ${employee9IsManager},

  },
});
`;

  // Define the path where the cypress.config.js file will be saved
  const filePath = path.join(__dirname, 'cypress.config.js');
  const file2Path = path.join(__dirname, `${companyName}_cypressConfigCopy.txt`);

  // Write the content to the file
  fs.writeFile(filePath, configContent, (err) => {
    if (err) {
      return res.status(500).send("Error generating the cypress.config file");
    }

    fs.writeFile(file2Path, configContent, (err) => {
      if (err) {
        return res.status(500).send("Error generating the copy of cypress.config file");
      }})

  });
  console.log("Created Cypress.config.js file")

  console.log("Starting Cyress.io automation")

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

app.listen(serverPort, () => {
  console.log(`Server is running on ${serverURL}`);
});

