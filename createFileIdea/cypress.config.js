
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    // Company info
    COMPANY_NAME: "Compnay N",
    COMPANY_ADDRESS: "Add",

    // Main contact
    MAIN_CONTACT_FIRST_NAME: "Fname 1",
    MAIN_CONTACT_LAST_NAME: "L Name 2",
    MAIN_CONTACT_EMAIL: "erwewwefwsef@rdfg.com",

    // Number of employees
    NUMBER_OF_EMPLOYEES: 23,
  },
});