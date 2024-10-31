

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
      HSE_URL: 'http://hseconnect.previewourapp.com/Login',

      //  user logins
      HSE_SUPER_USER_LOGIN_NAME: 'hse admin kyle',

      //  user passwords
      HSE_SUPER_USER_PW: '123456',

    //// VARIABLES ////

      // Onboarding Ticket ID
      TicketID: "2079",


      // Company info
      COMPANY_NAME: "Company 51",
      COMPANY_ADDRESS: "154, super cool avenue, auckland 1051, NZ",

      // Main contact
      MAIN_CONTACT_FIRST_NAME: "Main ",
      MAIN_CONTACT_LAST_NAME: "Guy",
      MAIN_CONTACT_EMAIL: "MainGuy1@Email.com",
      MAIN_CONTACT_PHONE_NUMBER: "09 234 5678",
      MAIN_CONTACT_MOBILE_NUMBER: "027 328 3456",
      MAIN_CONTACT_USERNAME: "C51 Admin",
      MAIN_CONTACT_PASSWORD: "Pw1231231!",

      // Is MTA
      IS_MTA: true,
      TRAINING_DUE_DATE: '28-11-2024',

      // Number of employees
      NUMBER_OF_EMPLOYEES: 5,

      // Employee 1 info
      Employee1_NAME: "Emp 1",
      Employee1_LOGIN_NAME: "Employe1@Email.com",
      Employee1_EMAIL: "Employe1@Email.com",
      Employee1_DEPARTMENT: "Office",
      Employee1_DEPARTMENT_ALREADY_EXISTS: "false",
      Employee1_IS_MANAGER: true,

      // Employee 2 info
      Employee2_NAME: "Emp 2",
      Employee2_LOGIN_NAME: "Employe2@Email.com", 
      Employee2_EMAIL: "Employe2@Email.com",
      Employee2_DEPARTMENT: "Office",
      Employee2_DEPARTMENT_ALREADY_EXISTS: "true",  
      Employee2_IS_MANAGER: true,

      // Employee 3 info
      Employee3_NAME: "Emp 3",
      Employee3_LOGIN_NAME: "Employe3@Email.com",
      Employee3_EMAIL: "Employe3@Email.com",
      Employee3_DEPARTMENT: "Workshop",
      Employee3_DEPARTMENT_ALREADY_EXISTS: "false",  
      Employee3_IS_MANAGER: true,

      // Employee 4 info
      Employee4_NAME: "Emp 4",
      Employee4_LOGIN_NAME: "Employe4@Email.com",
      Employee4_EMAIL: "Employe4@Email.com",
      Employee4_DEPARTMENT: "Workshop",
      Employee4_DEPARTMENT_ALREADY_EXISTS: "true",  
      Employee4_IS_MANAGER: false,

      // Employee 5 info
      Employee5_NAME: "Emp 5",
      Employee5_LOGIN_NAME: "Employe5@Email.com",
      Employee5_EMAIL: "Employe5@Email.com",
      Employee5_DEPARTMENT: "Workshop",
      Employee5_DEPARTMENT_ALREADY_EXISTS: "true",  
      Employee5_IS_MANAGER: false,

      // Employee 6 info
      Employee6_NAME: "null",
      Employee6_LOGIN_NAME: "null",
      Employee6_EMAIL: "null",
      Employee6_DEPARTMENT: "null",
      Employee6_DEPARTMENT_ALREADY_EXISTS: "false",  
      Employee6_IS_MANAGER: null,

      // Employee 7 info
      Employee7_NAME: "null",
      Employee7_LOGIN_NAME: "null",
      Employee7_EMAIL: "null",
      Employee7_DEPARTMENT: "null",
      Employee7_DEPARTMENT_ALREADY_EXISTS: "true",  
      Employee7_IS_MANAGER: null,

      // Employee 8 info
      Employee8_NAME: "null",
      Employee8_LOGIN_NAME: "null",
      Employee8_EMAIL: "null",
      Employee8_DEPARTMENT: "null",
      Employee8_DEPARTMENT_ALREADY_EXISTS: "true",  
      Employee8_IS_MANAGER: null,

      // Employee 9 info
      Employee9_NAME: "null",
      Employee9_LOGIN_NAME: "null",
      Employee9_EMAIL: "null",
      Employee9_DEPARTMENT: "null",
      Employee9_DEPARTMENT_ALREADY_EXISTS: "true",  
      Employee9_IS_MANAGER: null,

  },
});
