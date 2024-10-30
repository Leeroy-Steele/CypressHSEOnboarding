

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
      TicketID: "2077",


      // Company info
      COMPANY_NAME: "Company 32",
      COMPANY_ADDRESS: "123 address goes here, auckland, NZ",

      // Main contact
      MAIN_CONTACT_FIRST_NAME: "Tom",
      MAIN_CONTACT_LAST_NAME: "Smithy",
      MAIN_CONTACT_EMAIL: "TomSE@Email.com",
      MAIN_CONTACT_PHONE_NUMBER: "09 321 5432",
      MAIN_CONTACT_MOBILE_NUMBER: "027 456 7890",
      MAIN_CONTACT_USERNAME: "AdminC311",
      MAIN_CONTACT_PASSWORD: "Pw1231231!",

      // Is MTA
      IS_MTA: false,
      TRAINING_DUE_DATE: '27-11-2024',

      // Number of employees
      NUMBER_OF_EMPLOYEES: 7,

      // Employee 1 info
      Employee1_NAME: "EEmp 1",
      Employee1_LOGIN_NAME: "EEmp1@Email.com",
      Employee1_EMAIL: "EEmp1@Email.com",
      Employee1_DEPARTMENT: "Office",
      Employee1_DEPARTMENT_ALREADY_EXISTS: "false",
      Employee1_IS_MANAGER: true,

      // Employee 2 info
      Employee2_NAME: "EEmp 2",
      Employee2_LOGIN_NAME: "EEmp2@Email.com", 
      Employee2_EMAIL: "EEmp2@Email.com",
      Employee2_DEPARTMENT: "Office",
      Employee2_DEPARTMENT_ALREADY_EXISTS: "true",  
      Employee2_IS_MANAGER: true,

      // Employee 3 info
      Employee3_NAME: "EEmp 3",
      Employee3_LOGIN_NAME: "EEmp3@Email.com",
      Employee3_EMAIL: "EEmp3@Email.com",
      Employee3_DEPARTMENT: "Workshop",
      Employee3_DEPARTMENT_ALREADY_EXISTS: "false",  
      Employee3_IS_MANAGER: true,

      // Employee 4 info
      Employee4_NAME: "EEmp 4",
      Employee4_LOGIN_NAME: "EEmp4@Email.com",
      Employee4_EMAIL: "EEmp4@Email.com",
      Employee4_DEPARTMENT: "Workshop",
      Employee4_DEPARTMENT_ALREADY_EXISTS: "true",  
      Employee4_IS_MANAGER: true,

      // Employee 5 info
      Employee5_NAME: "EEmp 5",
      Employee5_LOGIN_NAME: "EEmp5@Email.com",
      Employee5_EMAIL: "EEmp5@Email.com",
      Employee5_DEPARTMENT: "Workshop",
      Employee5_DEPARTMENT_ALREADY_EXISTS: "true",  
      Employee5_IS_MANAGER: false,

      // Employee 6 info
      Employee6_NAME: "EEmp 6",
      Employee6_LOGIN_NAME: "EEmp6@Email.com",
      Employee6_EMAIL: "EEmp6@Email.com",
      Employee6_DEPARTMENT: "Workshop 2",
      Employee6_DEPARTMENT_ALREADY_EXISTS: "false",  
      Employee6_IS_MANAGER: false,

      // Employee 7 info
      Employee7_NAME: "EEmp 7",
      Employee7_LOGIN_NAME: "EEmp7@Email.com",
      Employee7_EMAIL: "EEmp7@Email.com",
      Employee7_DEPARTMENT: "Workshop 3",
      Employee7_DEPARTMENT_ALREADY_EXISTS: "false",  
      Employee7_IS_MANAGER: false,

      // Employee 8 info
      Employee8_NAME: "null",
      Employee8_LOGIN_NAME: "null",
      Employee8_EMAIL: "null",
      Employee8_DEPARTMENT: "null",
      Employee8_DEPARTMENT_ALREADY_EXISTS: "false",  
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
