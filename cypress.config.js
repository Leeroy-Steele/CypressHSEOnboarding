const { defineConfig } = require("cypress");


module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    // CONSTANTS //
    //  sites
    HSE_PREVIEW_URL: "http://hseconnect.previewourapp.com/Login",

    //  user logins
    HSE_SUPER_USER_LOGIN_NAME: 'hse admin kyle',

    //  user passwords
    HSE_SUPER_USER_PW: '123456',

    // VARIABLES //
    // Company info
    COMPANY_NAME: "My Cool Company",
    COMPANY_ADDRESS: "123 cool street, auckland",

    // Main contact
    MAIN_CONTACT_FIRST_NAME: "main",
    MAIN_CONTACT_LAST_NAME: "man",
    MAIN_CONTACT_EMAIL: "man@email.com",
    MAIN_CONTACT_PHONE_NUMBER: "0123 4567 89",
    MAIN_CONTACT_MOBILE_NUMBER: "027 329 4857",
    MAIN_CONTACT_USERNAME: "Coolguy123",
    MAIN_CONTACT_PASSWORD: "Pw1231231!",

    // Is MTA
    IS_MTA: true,

    // Number of employees
    NUMBER_OF_EMPLOYEES: 3,

    // Employee 1 info
    Employee1_NAME: "Employee 1 Name:",
    Employee1_EMAIL: "Emp1@email.com",
    Employee1_DEPARTMENT: "Employee 1 Department:",
    Employee1_IS_MANAGER: true,

    // Employee 2 info
    Employee2_NAME: "Employee 2 Name:",
    Employee2_EMAIL: "Emp2@email.com",
    Employee2_DEPARTMENT: "Employee 2 Department:",
    Employee2_IS_MANAGER: true,

    // Employee 3 info
    Employee3_NAME: "Employee 3 Name:",
    Employee3_EMAIL: "Emp3@email.com",
    Employee3_DEPARTMENT: "Employee 3 Department:",
    Employee3_IS_MANAGER: false,

    // Employee 4 info
    Employee4_NAME: "null",
    Employee4_EMAIL: "null",
    Employee4_DEPARTMENT: "null",
    Employee4_IS_MANAGER: null,

    // Employee 5 info
    Employee5_NAME: "null",
    Employee5_EMAIL: "null",
    Employee5_DEPARTMENT: "null",
    Employee5_IS_MANAGER: null,

    // Employee 6 info
    Employee6_NAME: "null",
    Employee6_EMAIL: "null",
    Employee6_DEPARTMENT: "null",
    Employee6_IS_MANAGER: null,

    // Employee 7 info
    Employee7_NAME: "null",
    Employee7_EMAIL: "null",
    Employee7_DEPARTMENT: "null",
    Employee7_IS_MANAGER: null,

    // Employee 8 info
    Employee8_NAME: "null",
    Employee8_EMAIL: "null",
    Employee8_DEPARTMENT: "null",
    Employee8_IS_MANAGER: null,

    // Employee 9 info
    Employee9_NAME: "null",
    Employee9_EMAIL: "null",
    Employee9_DEPARTMENT: "null",
    Employee9_IS_MANAGER: null,

  },
});
