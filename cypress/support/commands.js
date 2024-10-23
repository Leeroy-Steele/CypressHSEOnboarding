// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('ticketInternalNote', (note) => { 
    // For webhook to Power Automate. Flow is here -> `https://make.powerautomate.com/environments/2e21e621-fcf3-eae1-a4d1-9e02b3152fc8/flows/96d7de0a-c2fb-4a1b-940e-e541d79058b4/runs/08584732557519775569424720085CU26`

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const jsonBody = JSON.stringify({
        "Name": "",
        "Email": "",
        "TicketID": Number(Cypress.env('TicketID')),
        "Task": "Internal Note",
        "Note": `${note}`
      });
      
      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: jsonBody,
        redirect: "follow"
      };
    
      fetch("https://prod-19.australiasoutheast.logic.azure.com:443/workflows/ece9c78292324b17bf0c8f68f010cb6b/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=WLYxCqqlzpQMLo4-YVwIdiApsi5FIqCZvMrFLNA4A4U", requestOptions)
      .catch((error) => console.error(error));

 })

 Cypress.Commands.add('createContact', (name, email) => { 
    // For webhook to Power Automate. Flow is here -> `https://make.powerautomate.com/environments/2e21e621-fcf3-eae1-a4d1-9e02b3152fc8/flows/96d7de0a-c2fb-4a1b-940e-e541d79058b4/runs/08584732557519775569424720085CU26`

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const jsonBody = JSON.stringify({
        "Name": name,
        "Email": email,
        "TicketID": Number(Cypress.env('TicketID')),
        "Task": "Create Contact",
        "Note": ""
      });
      
      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: jsonBody,
        redirect: "follow"
      };
    
      fetch("https://prod-19.australiasoutheast.logic.azure.com:443/workflows/ece9c78292324b17bf0c8f68f010cb6b/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=WLYxCqqlzpQMLo4-YVwIdiApsi5FIqCZvMrFLNA4A4U", requestOptions)
      .catch((error) => console.error(error));

 })




//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })