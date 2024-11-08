

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
      TicketID: "2085",


      // Company info
      COMPANY_NAME: "Cust 12345567",
      COMPANY_ADDRESS: "123 street, auckland",

      // Main contact
      MAIN_CONTACT_FIRST_NAME: "asd",
      MAIN_CONTACT_LAST_NAME: "asd",
      MAIN_CONTACT_EMAIL: "as544d@asd.com",
      MAIN_CONTACT_PHONE_NUMBER: "09435345 ",
      MAIN_CONTACT_MOBILE_NUMBER: "4564476785678",
      MAIN_CONTACT_USERNAME: "Cust 12345345 Admin",
      MAIN_CONTACT_PASSWORD: "Pw1231231!",

      // Is MTA
      IS_MTA: true,
      TRAINING_DUE_DATE: '31-12-2024',

      // Number of employees
      NUMBER_OF_EMPLOYEES: 1,

      // Employee 1 info
      Employee1_NAME: "Asd",
      Employee1_LOGIN_NAME: "sassda@asd.com",
      Employee1_EMAIL: "sadada@asd.com",
      Employee1_DEPARTMENT: "D1",
      Employee1_DEPARTMENT_ALREADY_EXISTS: "false",
      Employee1_IS_MANAGER: false,

      // Employee 2 info
      Employee2_NAME: "null",
      Employee2_LOGIN_NAME: "null", 
      Employee2_EMAIL: "null",
      Employee2_DEPARTMENT: "null",
      Employee2_DEPARTMENT_ALREADY_EXISTS: "false",  
      Employee2_IS_MANAGER: null,

      // Employee 3 info
      Employee3_NAME: "null",
      Employee3_LOGIN_NAME: "null",
      Employee3_EMAIL: "null",
      Employee3_DEPARTMENT: "null",
      Employee3_DEPARTMENT_ALREADY_EXISTS: "true",  
      Employee3_IS_MANAGER: null,

      // Employee 4 info
      Employee4_NAME: "null",
      Employee4_LOGIN_NAME: "null",
      Employee4_EMAIL: "null",
      Employee4_DEPARTMENT: "null",
      Employee4_DEPARTMENT_ALREADY_EXISTS: "true",  
      Employee4_IS_MANAGER: null,

      // Employee 5 info
      Employee5_NAME: "null",
      Employee5_LOGIN_NAME: "null",
      Employee5_EMAIL: "null",
      Employee5_DEPARTMENT: "null",
      Employee5_DEPARTMENT_ALREADY_EXISTS: "true",  
      Employee5_IS_MANAGER: null,

      // Employee 6 info
      Employee6_NAME: "null",
      Employee6_LOGIN_NAME: "null",
      Employee6_EMAIL: "null",
      Employee6_DEPARTMENT: "null",
      Employee6_DEPARTMENT_ALREADY_EXISTS: "true",  
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
