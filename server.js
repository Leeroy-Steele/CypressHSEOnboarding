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
  } = req.body;

console.log("Environment is: "+Environment)

// Create department compare logic here
let departmentArr = [employee1Department, employee2Department,employee3Department,employee4Department,employee5Department,employee6Department,employee7Department,employee8Department,employee9Department]
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
      TRAINING_DUE_DATE: '${getDateFourWeeksFromNow()}',

      // Number of employees
      NUMBER_OF_EMPLOYEES: ${numberOfEmployees},

      // Employee 1 info
      Employee1_NAME: "${employee1Name}",
      Employee1_LOGIN_NAME: "${employee1LoginName}",
      Employee1_EMAIL: "${employee1Email}",
      Employee1_DEPARTMENT: "${employee1Department}",
      Employee1_DEPARTMENT_ALREADY_EXISTS: "${employeeDepartmentsArray[0].isMatch}",
      Employee1_IS_MANAGER: ${employee1IsManager},

      // Employee 2 info
      Employee2_NAME: "${employee2Name}",
      Employee2_LOGIN_NAME: "${employee2LoginName}", 
      Employee2_EMAIL: "${employee2Email}",
      Employee2_DEPARTMENT: "${employee2Department}",
      Employee2_DEPARTMENT_ALREADY_EXISTS: "${employeeDepartmentsArray[1].isMatch}",  
      Employee2_IS_MANAGER: ${employee2IsManager},

      // Employee 3 info
      Employee3_NAME: "${employee3Name}",
      Employee3_LOGIN_NAME: "${employee3LoginName}",
      Employee3_EMAIL: "${employee3Email}",
      Employee3_DEPARTMENT: "${employee3Department}",
      Employee3_DEPARTMENT_ALREADY_EXISTS: "${employeeDepartmentsArray[2].isMatch}",  
      Employee3_IS_MANAGER: ${employee3IsManager},

      // Employee 4 info
      Employee4_NAME: "${employee4Name}",
      Employee4_LOGIN_NAME: "${employee4LoginName}",
      Employee4_EMAIL: "${employee4Email}",
      Employee4_DEPARTMENT: "${employee4Department}",
      Employee4_DEPARTMENT_ALREADY_EXISTS: "${employeeDepartmentsArray[3].isMatch}",  
      Employee4_IS_MANAGER: ${employee4IsManager},

      // Employee 5 info
      Employee5_NAME: "${employee5Name}",
      Employee5_LOGIN_NAME: "${employee5LoginName}",
      Employee5_EMAIL: "${employee5Email}",
      Employee5_DEPARTMENT: "${employee5Department}",
      Employee5_DEPARTMENT_ALREADY_EXISTS: "${employeeDepartmentsArray[4].isMatch}",  
      Employee5_IS_MANAGER: ${employee5IsManager},

      // Employee 6 info
      Employee6_NAME: "${employee6Name}",
      Employee6_LOGIN_NAME: "${employee6LoginName}",
      Employee6_EMAIL: "${employee6Email}",
      Employee6_DEPARTMENT: "${employee6Department}",
      Employee6_DEPARTMENT_ALREADY_EXISTS: "${employeeDepartmentsArray[5].isMatch}",  
      Employee6_IS_MANAGER: ${employee6IsManager},

      // Employee 7 info
      Employee7_NAME: "${employee7Name}",
      Employee7_LOGIN_NAME: "${employee7LoginName}",
      Employee7_EMAIL: "${employee7Email}",
      Employee7_DEPARTMENT: "${employee7Department}",
      Employee7_DEPARTMENT_ALREADY_EXISTS: "${employeeDepartmentsArray[6].isMatch}",  
      Employee7_IS_MANAGER: ${employee7IsManager},

      // Employee 8 info
      Employee8_NAME: "${employee8Name}",
      Employee8_LOGIN_NAME: "${employee8LoginName}",
      Employee8_EMAIL: "${employee8Email}",
      Employee8_DEPARTMENT: "${employee8Department}",
      Employee8_DEPARTMENT_ALREADY_EXISTS: "${employeeDepartmentsArray[7].isMatch}",  
      Employee8_IS_MANAGER: ${employee8IsManager},

      // Employee 9 info
      Employee9_NAME: "${employee9Name}",
      Employee9_LOGIN_NAME: "${employee9LoginName}",
      Employee9_EMAIL: "${employee9Email}",
      Employee9_DEPARTMENT: "${employee9Department}",
      Employee9_DEPARTMENT_ALREADY_EXISTS: "${employeeDepartmentsArray[8].isMatch}",  
      Employee9_IS_MANAGER: ${employee9IsManager},

  },
});
`;

  // Define the path where the cypress.config.js file will be saved
  const filePath = path.join(__dirname, 'cypress.config.js');
  const file2Path = path.join(__dirname, `/PreviousRuns/${companyName}_cypressConfigCopy.txt`);
console.log(file2Path)
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

