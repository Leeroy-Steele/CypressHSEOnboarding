const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors()); // Enable CORS for all routes

app.post('/download', (req, res) => {
    const {
        companyName,
        companyAddress,
        mainContactFirstName,
        mainContactLastName,
        mainContactEmail,
        numberOfEmployees
    } = req.body;

    // Create the cypress.config.js content dynamically
    const configContent = `
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    // Company info
    COMPANY_NAME: "${companyName}",
    COMPANY_ADDRESS: "${companyAddress}",

    // Main contact
    MAIN_CONTACT_FIRST_NAME: "${mainContactFirstName}",
    MAIN_CONTACT_LAST_NAME: "${mainContactLastName}",
    MAIN_CONTACT_EMAIL: "${mainContactEmail}",

    // Number of employees
    NUMBER_OF_EMPLOYEES: ${numberOfEmployees},
  },
});`;

    // Define the path where the file will be saved
    const filePath = path.join(__dirname, 'cypress.config.js');

    // Write the content to the file
    fs.writeFile(filePath, configContent, (err) => {
        if (err) {
            return res.status(500).send("Error generating the file");
        }

        // Download the generated file
        res.download(filePath, 'cypress.config.js', (err) => {
            if (err) {
                return res.status(500).send("Error downloading the file");
            }
        });
    });
});

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});

