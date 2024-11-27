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

      // Employee 10 info
      Employee10_NAME: "${employee10Name}",
      Employee10_LOGIN_NAME: "${employee10LoginName}",
      Employee10_EMAIL: "${employee10Email}",
      Employee10_DEPARTMENT: "${employee10Department}",
      Employee10_DEPARTMENT_ALREADY_EXISTS: "${employeeDepartmentsArray[9].isMatch}",
      Employee10_IS_MANAGER: ${employee10IsManager},

      // Employee 11 info
      Employee11_NAME: "${employee11Name}",
      Employee11_LOGIN_NAME: "${employee11LoginName}", 
      Employee11_EMAIL: "${employee11Email}",
      Employee11_DEPARTMENT: "${employee11Department}",
      Employee11_DEPARTMENT_ALREADY_EXISTS: "${employeeDepartmentsArray[10].isMatch}",  
      Employee11_IS_MANAGER: ${employee11IsManager},

      // Employee 12 info
      Employee12_NAME: "${employee12Name}",
      Employee12_LOGIN_NAME: "${employee12LoginName}",
      Employee12_EMAIL: "${employee12Email}",
      Employee12_DEPARTMENT: "${employee12Department}",
      Employee12_DEPARTMENT_ALREADY_EXISTS: "${employeeDepartmentsArray[11].isMatch}",  
      Employee12_IS_MANAGER: ${employee12IsManager},

      // Employee 13 info
      Employee13_NAME: "${employee13Name}",
      Employee13_LOGIN_NAME: "${employee13LoginName}",
      Employee13_EMAIL: "${employee13Email}",
      Employee13_DEPARTMENT: "${employee13Department}",
      Employee13_DEPARTMENT_ALREADY_EXISTS: "${employeeDepartmentsArray[12].isMatch}",  
      Employee13_IS_MANAGER: ${employee13IsManager},

      // Employee 14 info
      Employee14_NAME: "${employee14Name}",
      Employee14_LOGIN_NAME: "${employee14LoginName}",
      Employee14_EMAIL: "${employee14Email}",
      Employee14_DEPARTMENT: "${employee14Department}",
      Employee14_DEPARTMENT_ALREADY_EXISTS: "${employeeDepartmentsArray[13].isMatch}",  
      Employee14_IS_MANAGER: ${employee14IsManager},

      // Employee 15 info
      Employee15_NAME: "${employee15Name}",
      Employee15_LOGIN_NAME: "${employee15LoginName}",
      Employee15_EMAIL: "${employee15Email}",
      Employee15_DEPARTMENT: "${employee15Department}",
      Employee15_DEPARTMENT_ALREADY_EXISTS: "${employeeDepartmentsArray[14].isMatch}",  
      Employee15_IS_MANAGER: ${employee15IsManager},

      // Employee 16 info
      Employee16_NAME: "${employee16Name}",
      Employee16_LOGIN_NAME: "${employee16LoginName}",
      Employee16_EMAIL: "${employee16Email}",
      Employee16_DEPARTMENT: "${employee16Department}",
      Employee16_DEPARTMENT_ALREADY_EXISTS: "${employeeDepartmentsArray[15].isMatch}",  
      Employee16_IS_MANAGER: ${employee16IsManager},

      // Employee 17 info
      Employee17_NAME: "${employee17Name}",
      Employee17_LOGIN_NAME: "${employee17LoginName}",
      Employee17_EMAIL: "${employee17Email}",
      Employee17_DEPARTMENT: "${employee17Department}",
      Employee17_DEPARTMENT_ALREADY_EXISTS: "${employeeDepartmentsArray[16].isMatch}",  
      Employee17_IS_MANAGER: ${employee17IsManager},

      // Employee 18 info
      Employee18_NAME: "${employee18Name}",
      Employee18_LOGIN_NAME: "${employee18LoginName}",
      Employee18_EMAIL: "${employee18Email}",
      Employee18_DEPARTMENT: "${employee18Department}",
      Employee18_DEPARTMENT_ALREADY_EXISTS: "${employeeDepartmentsArray[17].isMatch}",  
      Employee18_IS_MANAGER: ${employee18IsManager},

---

      // Employee 19 info
      Employee19_NAME: "${employee19Name}",
      Employee19_LOGIN_NAME: "${employee19LoginName}",
      Employee19_EMAIL: "${employee19Email}",
      Employee19_DEPARTMENT: "${employee19Department}",
      Employee19_DEPARTMENT_ALREADY_EXISTS: "${employeeDepartmentsArray[18].isMatch}",
      Employee19_IS_MANAGER: ${employee19IsManager},

      // Employee 20 info
      Employee20_NAME: "${employee20Name}",
      Employee20_LOGIN_NAME: "${employee20LoginName}", 
      Employee20_EMAIL: "${employee20Email}",
      Employee20_DEPARTMENT: "${employee20Department}",
      Employee20_DEPARTMENT_ALREADY_EXISTS: "${employeeDepartmentsArray[19].isMatch}",  
      Employee20_IS_MANAGER: ${employee20IsManager},

      // Employee 21 info
      Employee21_NAME: "${employee21Name}",
      Employee21_LOGIN_NAME: "${employee21LoginName}",
      Employee21_EMAIL: "${employee21Email}",
      Employee21_DEPARTMENT: "${employee21Department}",
      Employee21_DEPARTMENT_ALREADY_EXISTS: "${employeeDepartmentsArray[20].isMatch}",  
      Employee21_IS_MANAGER: ${employee21IsManager},

      // Employee 22 info
      Employee22_NAME: "${employee22Name}",
      Employee22_LOGIN_NAME: "${employee22LoginName}",
      Employee22_EMAIL: "${employee22Email}",
      Employee22_DEPARTMENT: "${employee22Department}",
      Employee22_DEPARTMENT_ALREADY_EXISTS: "${employeeDepartmentsArray[21].isMatch}",  
      Employee22_IS_MANAGER: ${employee22IsManager},

      // Employee 23 info
      Employee23_NAME: "${employee23Name}",
      Employee23_LOGIN_NAME: "${employee23LoginName}",
      Employee23_EMAIL: "${employee23Email}",
      Employee23_DEPARTMENT: "${employee23Department}",
      Employee23_DEPARTMENT_ALREADY_EXISTS: "${employeeDepartmentsArray[22].isMatch}",  
      Employee23_IS_MANAGER: ${employee23IsManager},

      // Employee 24 info
      Employee24_NAME: "${employee24Name}",
      Employee24_LOGIN_NAME: "${employee24LoginName}",
      Employee24_EMAIL: "${employee24Email}",
      Employee24_DEPARTMENT: "${employee24Department}",
      Employee24_DEPARTMENT_ALREADY_EXISTS: "${employeeDepartmentsArray[23].isMatch}",  
      Employee24_IS_MANAGER: ${employee24IsManager},

      // Employee 25 info
      Employee25_NAME: "${employee25Name}",
      Employee25_LOGIN_NAME: "${employee25LoginName}",
      Employee25_EMAIL: "${employee25Email}",
      Employee25_DEPARTMENT: "${employee25Department}",
      Employee25_DEPARTMENT_ALREADY_EXISTS: "${employeeDepartmentsArray[24].isMatch}",  
      Employee25_IS_MANAGER: ${employee25IsManager},

  },
});
`;

  // Create a duplicate cypress.config file without passwords for archiving purposes
  const duplicateConfigContent = `

  Please note: Passwords have been redacted from this file for security reasons.

    //// CONSTANTS ////
      //  HSE URL
      HSE_URL: '${Environment==="Production" ?  process.env.HSE_PROD_URL:process.env.HSE_PREV_URL}',

      //  user logins
      HSE_SUPER_USER_LOGIN_NAME: '${Environment==="Production" ? process.env.HSE_PROD_SUPERUSER_LOGIN : process.env.HSE_PREV_SUPERUSER_LOGIN}',

      //  user passwords
      HSE_SUPER_USER_PW: **Redacted from file**,

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
      MAIN_CONTACT_PASSWORD: **Redacted from file**,

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

        // Employee 10 info
      Employee10_NAME: "${employee10Name}",
      Employee10_LOGIN_NAME: "${employee10LoginName}",
      Employee10_EMAIL: "${employee10Email}",
      Employee10_DEPARTMENT: "${employee10Department}",
      Employee10_DEPARTMENT_ALREADY_EXISTS: "${employeeDepartmentsArray[9].isMatch}",
      Employee10_IS_MANAGER: ${employee10IsManager},

      // Employee 11 info
      Employee11_NAME: "${employee11Name}",
      Employee11_LOGIN_NAME: "${employee11LoginName}", 
      Employee11_EMAIL: "${employee11Email}",
      Employee11_DEPARTMENT: "${employee11Department}",
      Employee11_DEPARTMENT_ALREADY_EXISTS: "${employeeDepartmentsArray[10].isMatch}",  
      Employee11_IS_MANAGER: ${employee11IsManager},

      // Employee 12 info
      Employee12_NAME: "${employee12Name}",
      Employee12_LOGIN_NAME: "${employee12LoginName}",
      Employee12_EMAIL: "${employee12Email}",
      Employee12_DEPARTMENT: "${employee12Department}",
      Employee12_DEPARTMENT_ALREADY_EXISTS: "${employeeDepartmentsArray[11].isMatch}",  
      Employee12_IS_MANAGER: ${employee12IsManager},

      // Employee 13 info
      Employee13_NAME: "${employee13Name}",
      Employee13_LOGIN_NAME: "${employee13LoginName}",
      Employee13_EMAIL: "${employee13Email}",
      Employee13_DEPARTMENT: "${employee13Department}",
      Employee13_DEPARTMENT_ALREADY_EXISTS: "${employeeDepartmentsArray[12].isMatch}",  
      Employee13_IS_MANAGER: ${employee13IsManager},

      // Employee 14 info
      Employee14_NAME: "${employee14Name}",
      Employee14_LOGIN_NAME: "${employee14LoginName}",
      Employee14_EMAIL: "${employee14Email}",
      Employee14_DEPARTMENT: "${employee14Department}",
      Employee14_DEPARTMENT_ALREADY_EXISTS: "${employeeDepartmentsArray[13].isMatch}",  
      Employee14_IS_MANAGER: ${employee14IsManager},

      // Employee 15 info
      Employee15_NAME: "${employee15Name}",
      Employee15_LOGIN_NAME: "${employee15LoginName}",
      Employee15_EMAIL: "${employee15Email}",
      Employee15_DEPARTMENT: "${employee15Department}",
      Employee15_DEPARTMENT_ALREADY_EXISTS: "${employeeDepartmentsArray[14].isMatch}",  
      Employee15_IS_MANAGER: ${employee15IsManager},

      // Employee 16 info
      Employee16_NAME: "${employee16Name}",
      Employee16_LOGIN_NAME: "${employee16LoginName}",
      Employee16_EMAIL: "${employee16Email}",
      Employee16_DEPARTMENT: "${employee16Department}",
      Employee16_DEPARTMENT_ALREADY_EXISTS: "${employeeDepartmentsArray[15].isMatch}",  
      Employee16_IS_MANAGER: ${employee16IsManager},

      // Employee 17 info
      Employee17_NAME: "${employee17Name}",
      Employee17_LOGIN_NAME: "${employee17LoginName}",
      Employee17_EMAIL: "${employee17Email}",
      Employee17_DEPARTMENT: "${employee17Department}",
      Employee17_DEPARTMENT_ALREADY_EXISTS: "${employeeDepartmentsArray[16].isMatch}",  
      Employee17_IS_MANAGER: ${employee17IsManager},

      // Employee 18 info
      Employee18_NAME: "${employee18Name}",
      Employee18_LOGIN_NAME: "${employee18LoginName}",
      Employee18_EMAIL: "${employee18Email}",
      Employee18_DEPARTMENT: "${employee18Department}",
      Employee18_DEPARTMENT_ALREADY_EXISTS: "${employeeDepartmentsArray[17].isMatch}",  
      Employee18_IS_MANAGER: ${employee18IsManager},

---

      // Employee 19 info
      Employee19_NAME: "${employee19Name}",
      Employee19_LOGIN_NAME: "${employee19LoginName}",
      Employee19_EMAIL: "${employee19Email}",
      Employee19_DEPARTMENT: "${employee19Department}",
      Employee19_DEPARTMENT_ALREADY_EXISTS: "${employeeDepartmentsArray[18].isMatch}",
      Employee19_IS_MANAGER: ${employee19IsManager},

      // Employee 20 info
      Employee20_NAME: "${employee20Name}",
      Employee20_LOGIN_NAME: "${employee20LoginName}", 
      Employee20_EMAIL: "${employee20Email}",
      Employee20_DEPARTMENT: "${employee20Department}",
      Employee20_DEPARTMENT_ALREADY_EXISTS: "${employeeDepartmentsArray[19].isMatch}",  
      Employee20_IS_MANAGER: ${employee20IsManager},

      // Employee 21 info
      Employee21_NAME: "${employee21Name}",
      Employee21_LOGIN_NAME: "${employee21LoginName}",
      Employee21_EMAIL: "${employee21Email}",
      Employee21_DEPARTMENT: "${employee21Department}",
      Employee21_DEPARTMENT_ALREADY_EXISTS: "${employeeDepartmentsArray[20].isMatch}",  
      Employee21_IS_MANAGER: ${employee21IsManager},

      // Employee 22 info
      Employee22_NAME: "${employee22Name}",
      Employee22_LOGIN_NAME: "${employee22LoginName}",
      Employee22_EMAIL: "${employee22Email}",
      Employee22_DEPARTMENT: "${employee22Department}",
      Employee22_DEPARTMENT_ALREADY_EXISTS: "${employeeDepartmentsArray[21].isMatch}",  
      Employee22_IS_MANAGER: ${employee22IsManager},

      // Employee 23 info
      Employee23_NAME: "${employee23Name}",
      Employee23_LOGIN_NAME: "${employee23LoginName}",
      Employee23_EMAIL: "${employee23Email}",
      Employee23_DEPARTMENT: "${employee23Department}",
      Employee23_DEPARTMENT_ALREADY_EXISTS: "${employeeDepartmentsArray[22].isMatch}",  
      Employee23_IS_MANAGER: ${employee23IsManager},

      // Employee 24 info
      Employee24_NAME: "${employee24Name}",
      Employee24_LOGIN_NAME: "${employee24LoginName}",
      Employee24_EMAIL: "${employee24Email}",
      Employee24_DEPARTMENT: "${employee24Department}",
      Employee24_DEPARTMENT_ALREADY_EXISTS: "${employeeDepartmentsArray[23].isMatch}",  
      Employee24_IS_MANAGER: ${employee24IsManager},

      // Employee 25 info
      Employee25_NAME: "${employee25Name}",
      Employee25_LOGIN_NAME: "${employee25LoginName}",
      Employee25_EMAIL: "${employee25Email}",
      Employee25_DEPARTMENT: "${employee25Department}",
      Employee25_DEPARTMENT_ALREADY_EXISTS: "${employeeDepartmentsArray[24].isMatch}",  
      Employee25_IS_MANAGER: ${employee25IsManager},

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

