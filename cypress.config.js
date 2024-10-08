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
      HSE_PREVIEW_URL:"http://hseconnect.previewourapp.com/Login", 

      //  user logins
      HSE_SUPER_USER_LOGIN_NAME:'hse admin kyle',
      
      //  user passwords
      HSE_SUPER_USER_PW:'123456',

    // VARIABLES //
      //  Company info
      COMPANY_NAME:"Company from CypressIO",
      COMPANY_ADDRESS:"123 avenue, london, uk",

      //  Main contact
      MAIN_CONTACT_FIRST_NAME:"Main",
      MAIN_CONTACT_LAST_NAME:"Contact",
      MAIN_CONTACT_EMAIL:"mainContact111@email.com",
      MAIN_CONTACT_PHONE_NUMBER:"12 234 3456",
      MAIN_CONTACT_MOBILE_NUMBER:"027 123 4567",
      MAIN_CONTACT_USERNAME:"CFC Admin",
      MAIN_CONTACT_PASSWORD:"Pw1231231!",

      // number of employees:
      NUMBER_OF_EMPLOYEES:4,

      // is MTA?
      IS_MTA:false,

      //  Employee 1:
      Employee1_NAME:"employee 1",
      Employee1_EMAIL:"employee1111@email.com",
      Employee1_DEPARTMENT:"office",
      Employee1_IS_MANAGER:true,

      //  Employee 2:
      Employee2_NAME:"employee 2",
      Employee2_EMAIL:"employee2222@email.com",
      Employee2_DEPARTMENT:"office",
      Employee2_IS_MANAGER:true,

      //  Employee 3:
      Employee3_NAME:"employee 3",
      Employee3_EMAIL:"employee3333@email.com",
      Employee3_DEPARTMENT:"workshop",
      Employee3_IS_MANAGER:true,

      //  Employee 4:
      Employee4_NAME:"employee 4",
      Employee4_EMAIL:"employee4444@email.com",
      Employee4_DEPARTMENT:"workshop",
      Employee4_IS_MANAGER:false,
  },
});
