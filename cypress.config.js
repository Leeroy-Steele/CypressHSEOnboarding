

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
      HSE_URL: 'https://www.hseconnect.co.nz/login',

      //  user logins
      HSE_SUPER_USER_LOGIN_NAME: 'hse admin lancom',

      //  user passwords
      HSE_SUPER_USER_PW: 'ssH0P+la]{T3-8iU',

    //// VARIABLES ////

      // Onboarding Ticket ID
      TicketID: "2828965",


      // Company info
      COMPANY_NAME: "Bridgestone Helensville",
      COMPANY_ADDRESS: "32 Mill Road, Helensville 0800",

      // Main contact
      MAIN_CONTACT_FIRST_NAME: "Sharm",
      MAIN_CONTACT_LAST_NAME: "Perera",
      MAIN_CONTACT_EMAIL: "Bridgestone.helensville@gmail.com",
      MAIN_CONTACT_PHONE_NUMBER: "09 4207385",
      MAIN_CONTACT_MOBILE_NUMBER: "0211796423",
      MAIN_CONTACT_USERNAME: "BH Admin",
      MAIN_CONTACT_PASSWORD: "Pw1231231!",

      // Is MTA
      IS_MTA: true,
      TRAINING_DUE_DATE: '29-11-2024',

      // Number of employees
      NUMBER_OF_EMPLOYEES: 4,

      // Employee 1 info
      Employee1_NAME: "Sharm Perera",
      Employee1_LOGIN_NAME: "Sham9182@hotmail.com",
      Employee1_EMAIL: "Sham9182@hotmail.com",
      Employee1_DEPARTMENT: "Office",
      Employee1_DEPARTMENT_ALREADY_EXISTS: "false",
      Employee1_IS_MANAGER: true,

      // Employee 2 info
      Employee2_NAME: "Vishal Sala",
      Employee2_LOGIN_NAME: "BH Vishal Sala", 
      Employee2_EMAIL: "Bridgestone.helensville@gmail.com",
      Employee2_DEPARTMENT: "Workshop",
      Employee2_DEPARTMENT_ALREADY_EXISTS: "false",  
      Employee2_IS_MANAGER: true,

      // Employee 3 info
      Employee3_NAME: "Parmesh Sharma",
      Employee3_LOGIN_NAME: "BH Parmesh Sharma",
      Employee3_EMAIL: "Bridgestone.helensville@gmail.com",
      Employee3_DEPARTMENT: "Workshop",
      Employee3_DEPARTMENT_ALREADY_EXISTS: "true",  
      Employee3_IS_MANAGER: false,

      // Employee 4 info
      Employee4_NAME: "Hemantha Chandralal",
      Employee4_LOGIN_NAME: "BH Hemantha Chandralal",
      Employee4_EMAIL: "Bridgestone.helensville@gmail.com",
      Employee4_DEPARTMENT: "Workshop",
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
