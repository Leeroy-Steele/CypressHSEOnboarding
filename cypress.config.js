

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
      TicketID: "2072",


      // Company info
      COMPANY_NAME: "Company 21",
      COMPANY_ADDRESS: "123 address goes here",

      // Main contact
      MAIN_CONTACT_FIRST_NAME: "Jack",
      MAIN_CONTACT_LAST_NAME: "Smith",
      MAIN_CONTACT_EMAIL: "JackS67890@Email.com",
      MAIN_CONTACT_PHONE_NUMBER: "09 321 5432",
      MAIN_CONTACT_MOBILE_NUMBER: "027 456 7890",
      MAIN_CONTACT_USERNAME: "Admin67890",
      MAIN_CONTACT_PASSWORD: "Pw1231231!",

      // Is MTA
      IS_MTA: true,
      TRAINING_DUE_DATE: '26-11-2024',

      // Number of employees
      NUMBER_OF_EMPLOYEES: 4,

      // Employee 1 info
      Employee1_NAME: "John P",
      Employee1_LOGIN_NAME: "J167890",
      Employee1_EMAIL: "JohnP67890@Email.com",
      Employee1_DEPARTMENT: "Johns Department",
      Employee1_DEPARTMENT_ALREADY_EXISTS: "false",
      Employee1_IS_MANAGER: true,

      // Employee 2 info
      Employee2_NAME: "John P 2",
      Employee2_LOGIN_NAME: "J267890", 
      Employee2_EMAIL: "JohnP267890@Email.com",
      Employee2_DEPARTMENT: "Johns Department",
      Employee2_DEPARTMENT_ALREADY_EXISTS: "true",  
      Employee2_IS_MANAGER: true,

      // Employee 3 info
      Employee3_NAME: "John P",
      Employee3_LOGIN_NAME: "J167890567",
      Employee3_EMAIL: "JohnP67890wr@Email.com",
      Employee3_DEPARTMENT: "Johns Department 2",
      Employee3_DEPARTMENT_ALREADY_EXISTS: "false",  
      Employee3_IS_MANAGER: false,

      // Employee 4 info
      Employee4_NAME: "John P",
      Employee4_LOGIN_NAME: "J167890123",
      Employee4_EMAIL: "JohnP67890sa@Email.com",
      Employee4_DEPARTMENT: "Johns Department 2",
      Employee4_DEPARTMENT_ALREADY_EXISTS: "true",  
      Employee4_IS_MANAGER: false,

      // Employee 5 info
      Employee5_NAME: "null",
      Employee5_LOGIN_NAME: "null",
      Employee5_EMAIL: "null",
      Employee5_DEPARTMENT: "null",
      Employee5_DEPARTMENT_ALREADY_EXISTS: "false",  
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
