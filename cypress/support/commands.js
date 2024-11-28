
Cypress.Commands.add('ticketInternalNote', (note) => { 
    // For webhook to Power Automate. Flow is here -> `https://make.powerautomate.com/environments/2e21e621-fcf3-eae1-a4d1-9e02b3152fc8/flows/96d7de0a-c2fb-4a1b-940e-e541d79058b4/runs/08584732557519775569424720085CU26`

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const jsonBody = JSON.stringify({
        "Name": "",
        "Email": "",
        "TicketID": Number(Cypress.env('TicketID')),
        "Task": "Internal Note",
        "Note": `${note}`,
        "Env": Cypress.env('HSE_URL'),
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
        "Note": "",
        "Env": Cypress.env('HSE_URL'),
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
    cy.get(':nth-child(2) > .input_content > .clearfix > :nth-child(1) > .ng-pristine').type(Cypress.env(`IS_MTA`)?'+++Email_Blocked+++' + email : email)
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
      Created new user: ${name} in ${Cypress.env('COMPANY_NAME')}
      ${Cypress.env('IS_MTA')?"+++Email_Blocked+++ was added to the email address to prevent notification emails":null}
      `)
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
    cy.get(':nth-child(2) > .input_content > .clearfix > :nth-child(1) > .ng-pristine').type(Cypress.env(`IS_MTA`)?'+++Email_Blocked+++' + email : email)
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
  Created new user: ${name} in ${Cypress.env('COMPANY_NAME')}

  ${Cypress.env('IS_MTA')?"As this is a MTA customer '+++Email_Blocked+++' was added to the email address to prevent a notification email":null}
  `)
    // Go Back
    cy.get('.clearfix.ng-binding > .button').should('exist').click()

})


Cypress.Commands.add('addTasklistToTicket', () => { 
  // For webhook to Power Automate. Flow is here -> `https://make.powerautomate.com/environments/2e21e621-fcf3-eae1-a4d1-9e02b3152fc8/flows/96d7de0a-c2fb-4a1b-940e-e541d79058b4/runs/08584732557519775569424720085CU26`

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const jsonBody = JSON.stringify({
      "Name": "",
      "Email": "",
      "TicketID": Number(Cypress.env('TicketID')),
      "Task": Cypress.env(`IS_MTA`)?'Add MTA Tasklist': 'Add Tasklist',
      "Note": "",
      "Env": Cypress.env('HSE_URL'),
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

Cypress.Commands.add('removeConfigFile', () => { 
  // For webhook to Power Automate. Flow is here -> `https://make.powerautomate.com/environments/2e21e621-fcf3-eae1-a4d1-9e02b3152fc8/flows/96d7de0a-c2fb-4a1b-940e-e541d79058b4/runs/08584732557519775569424720085CU26`

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
    
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      redirect: "follow"
    };
  
    fetch("http://localhost:3000/removeConfigFile", requestOptions)
    .catch((error) => console.error(error));

})

Cypress.Commands.add('createAllUsersInHse', () => { 

  const createHseUser_ExistingDepartment = (name, loginName, email, Department, IsManager) => { 
    // Select New User
    cy.get('.report > div.ng-scope > .ng-scope > h2.clearfix > .button').should('exist').click()
    cy.wait(3000)
    // Add login name
    cy.get(':nth-child(1) > :nth-child(2) > :nth-child(2) > :nth-child(2) > [placeholder="Login Name"][type="text"]').type(loginName)
    cy.wait(1000)
    // Add display name
    cy.get(':nth-child(1) > .textbox').type(name)
    cy.wait(1000)
    // Add Email if entered on form
    if(email!==""){
      cy.get(':nth-child(2) > .input_content > .clearfix > :nth-child(1) > .ng-pristine').type(Cypress.env(`IS_MTA`)?'+++Email_Blocked+++' + email : email)
      cy.wait(1000)
    }
    
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
      Created new user: ${name} in ${Cypress.env('COMPANY_NAME')}
      ${Cypress.env('IS_MTA')?"+++Email_Blocked+++ was added to the email address to prevent notification emails":null}
      `)
    // Go Back
    cy.get('.clearfix.ng-binding > .button').should('exist').click()

}

  const createHseUser_NewDepartment = (name, loginName, email, Department, IsManager) => { 
    // Select New User
    cy.get('.report > div.ng-scope > .ng-scope > h2.clearfix > .button').should('exist').click()
    cy.wait(3000)
    // Add login name
    cy.get(':nth-child(1) > :nth-child(2) > :nth-child(2) > :nth-child(2) > [placeholder="Login Name"][type="text"]').type(loginName)
    cy.wait(1000)
    // Add display name
    cy.get(':nth-child(1) > .textbox').type(name)
    cy.wait(1000)
    // Add Email if entered on form
    if(email!==""){
      cy.get(':nth-child(2) > .input_content > .clearfix > :nth-child(1) > .ng-pristine').type(Cypress.env(`IS_MTA`)?'+++Email_Blocked+++' + email : email)
      cy.wait(1000)
    }

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
  Created new user: ${name} in ${Cypress.env('COMPANY_NAME')}

  ${Cypress.env('IS_MTA')?"As this is a MTA customer '+++Email_Blocked+++' was added to the email address to prevent a notification email":null}
  `)
    // Go Back
    cy.get('.clearfix.ng-binding > .button').should('exist').click()

}

  const addEmployees = [];
  const numberOfEmployees = Cypress.env('NUMBER_OF_EMPLOYEES');
  
  for (let i = 1; i <= numberOfEmployees; i++) {
    addEmployees[i] = () => {
      const departmentExists = Cypress.env(`Employee${i}_DEPARTMENT_ALREADY_EXISTS`) === "true";
      const method = departmentExists 
        ? createHseUser_ExistingDepartment 
        : createHseUser_NewDepartment;
  
      method(
        Cypress.env(`Employee${i}_NAME`),
        Cypress.env(`Employee${i}_LOGIN_NAME`),
        Cypress.env(`Employee${i}_EMAIL`),
        Cypress.env(`Employee${i}_DEPARTMENT`),
        Cypress.env(`Employee${i}_IS_MANAGER`)
      );
    };
  }

  addEmployees.forEach((func)=>{func()})

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