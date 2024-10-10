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
      NUMBER_OF_EMPLOYEES:8,

      // is MTA?
      IS_MTA:false,

      //  Employee 1:
      Employee1_NAME:"employee 1",
      Employee1_EMAIL:"employee-1@email.com",
      Employee1_DEPARTMENT:"office",
      Employee1_IS_MANAGER:true,

      //  Employee 2:
      Employee2_NAME:"employee 2",
      Employee2_EMAIL:"employee-2@email.com",
      Employee2_DEPARTMENT:"office",
      Employee2_IS_MANAGER:true,

      //  Employee 3:
      Employee3_NAME:"employee 3",
      Employee3_EMAIL:"employee-3@email.com",
      Employee3_DEPARTMENT:"workshop",
      Employee3_IS_MANAGER:true,

      //  Employee 4:
      Employee4_NAME:"employee 4",
      Employee4_EMAIL:"employee-4@email.com",
      Employee4_DEPARTMENT:"workshop",
      Employee4_IS_MANAGER:true,

      //  Employee 5:
      Employee5_NAME:"employee 5",
      Employee5_EMAIL:"employee-5@email.com",
      Employee5_DEPARTMENT:"office",
      Employee5_IS_MANAGER:false,

      //  Employee 6:
      Employee6_NAME:"employee 6",
      Employee6_EMAIL:"employee-6@email.com",
      Employee6_DEPARTMENT:"office",
      Employee6_IS_MANAGER:false,

      //  Employee 7:
      Employee7_NAME:"employee 7",
      Employee7_EMAIL:"employee-7@email.com",
      Employee7_DEPARTMENT:"workshop",
      Employee7_IS_MANAGER:false,

      //  Employee 8:
      Employee8_NAME:"employee 8",
      Employee8_EMAIL:"employee-8@email.com",
      Employee8_DEPARTMENT:"workshop",
      Employee8_IS_MANAGER:false,
  },
});
