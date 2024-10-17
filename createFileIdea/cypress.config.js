
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    // Company info
    COMPANY_NAME: "C1",
    COMPANY_ADDRESS: "A1",

    // Main contact
    MAIN_CONTACT_FIRST_NAME: "Fname",
    MAIN_CONTACT_LAST_NAME: "Lname",
    MAIN_CONTACT_EMAIL: "emil@email",

    // Number of employees
    NUMBER_OF_EMPLOYEES: 345,
  },
});