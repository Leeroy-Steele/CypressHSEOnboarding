
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    // Company info
    COMPANY_NAME: "company1 ",
    COMPANY_ADDRESS: "234",

    // Main contact
    MAIN_CONTACT_FIRST_NAME: "FName 2",
    MAIN_CONTACT_LAST_NAME: "LName 2",
    MAIN_CONTACT_EMAIL: "e@e.com",

    // Number of employees
    NUMBER_OF_EMPLOYEES: 333333333333,
  },
});