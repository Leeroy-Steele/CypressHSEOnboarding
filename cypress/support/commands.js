
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

 Cypress.Commands.add('createHseUser_ExistingDepartment', (name, loginName, email, Department, IsManager) => { 
    // Select New User
    cy.get('.report > div.ng-scope > .ng-scope > h2.clearfix > .button').should('exist').click()
    cy.wait(3000)
    // Add login name
    cy.get(':nth-child(1) > :nth-child(2) > :nth-child(2) > :nth-child(2) > [placeholder="Login Name"][type="text"]').type(loginName)
    cy.wait(1000)
    // Add display name
    cy.get(':nth-child(1) > .textbox').type(name)
    cy.wait(1000)
    // Add Email
    cy.get(':nth-child(2) > .input_content > .clearfix > :nth-child(1) > .ng-pristine').type(email)
    cy.wait(1000)
    
    // IF IsManager === true. Assign HSE manager role
    if(IsManager){
      cy.get('.padding-right-col-sm > .dropdown > .button').click()
      cy.get('.Manager_check').click()
    }

    // Set Department
    cy.get(':nth-child(2) > .dropdown > .dropdown-button').click()
    cy.get(':nth-child(2) > .dropdown > .dropdown-menu').contains(Department).click()

    // Save user
    cy.get('.pull-right > .button').should('exist').click()
    cy.wait(1000)
    cy.ticketInternalNote(`
      Created user ${name} in HSE`)
    // Go Back
    cy.get('.clearfix.ng-binding > .button').should('exist').click()

})

Cypress.Commands.add('createHseUser_NewDepartment', (name, loginName, email, Department, IsManager) => { 
    // Select New User
    cy.get('.report > div.ng-scope > .ng-scope > h2.clearfix > .button').should('exist').click()
    cy.wait(3000)
    // Add login name
    cy.get(':nth-child(1) > :nth-child(2) > :nth-child(2) > :nth-child(2) > [placeholder="Login Name"][type="text"]').type(loginName)
    cy.wait(1000)
    // Add display name
    cy.get(':nth-child(1) > .textbox').type(name)
    cy.wait(1000)
    // Add Email
    cy.get(':nth-child(2) > .input_content > .clearfix > :nth-child(1) > .ng-pristine').type(email)
    cy.wait(1000)

    // IF IsManager === true. Assign HSE manager role
    if(IsManager){
      cy.get('.padding-right-col-sm > .dropdown > .button').click()
      cy.get('.Manager_check').click()
    }

    // Create / Set Department
    cy.get(':nth-child(2) > .dropdown > .dropdown-button').click()
    cy.get('.wide_container > .textbox').type(Department)
    cy.get('.wide_container > .button').click()
    cy.get(':nth-child(2) > .dropdown > .dropdown-menu').contains(Department).click()

    // Save user
    cy.get('.pull-right > .button').should('exist').click()
    cy.wait(1000)
    cy.ticketInternalNote(`
      Created user ${name} in HSE`)
    // Go Back
    cy.get('.clearfix.ng-binding > .button').should('exist').click()

})







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