// const cypress = require("cypress")

let shortWait = 1000
let mediumWait = 2000
let LongWait = 3000
let extralongWait = 4000

let addEmployee1 = ()=>{}
let addEmployee2 = ()=>{}
let addEmployee3 = ()=>{}
let addEmployee4 = ()=>{}
let addEmployee5 = ()=>{}
let addEmployee6 = ()=>{}
let addEmployee7 = ()=>{}
let addEmployee8 = ()=>{}
let addEmployee9 = ()=>{}
if(Cypress.env('NUMBER_OF_EMPLOYEES')>0){
  addEmployee1=()=>{
    cy.createHseUser_NewDepartment(Cypress.env('Employee1_NAME'),Cypress.env('Employee1_LOGIN_NAME'),Cypress.env('Employee1_EMAIL'),Cypress.env('Employee1_DEPARTMENT'),Cypress.env('Employee1_IS_MANAGER'))
  }
}
if(Cypress.env('NUMBER_OF_EMPLOYEES')>1){
  addEmployee2=()=>{
    if(Cypress.env('Employee2_DEPARTMENT_ALREADY_EXISTS')==="true"){
      cy.createHseUser_ExistingDepartment(Cypress.env('Employee2_NAME'),Cypress.env('Employee2_LOGIN_NAME'),Cypress.env('Employee2_EMAIL'),Cypress.env('Employee2_DEPARTMENT'),Cypress.env('Employee2_IS_MANAGER'))
    }else{
      cy.createHseUser_NewDepartment(Cypress.env('Employee2_NAME'),Cypress.env('Employee2_LOGIN_NAME'),Cypress.env('Employee2_EMAIL'),Cypress.env('Employee2_DEPARTMENT'),Cypress.env('Employee2_IS_MANAGER'))
    }
  }
}
if(Cypress.env('NUMBER_OF_EMPLOYEES')>2){
  addEmployee3 = ()=>{
    if(Cypress.env('Employee3_DEPARTMENT_ALREADY_EXISTS')==="true"){
      cy.createHseUser_ExistingDepartment(Cypress.env('Employee3_NAME'),Cypress.env('Employee3_LOGIN_NAME'),Cypress.env('Employee3_EMAIL'),Cypress.env('Employee3_DEPARTMENT'),Cypress.env('Employee3_IS_MANAGER'))
    }else{
      cy.createHseUser_NewDepartment(Cypress.env('Employee3_NAME'),Cypress.env('Employee3_LOGIN_NAME'),Cypress.env('Employee3_EMAIL'),Cypress.env('Employee3_DEPARTMENT'),Cypress.env('Employee3_IS_MANAGER'))
    }
  }
}
if(Cypress.env('NUMBER_OF_EMPLOYEES')>3){
  addEmployee4 = ()=>{
    if(Cypress.env('Employee4_DEPARTMENT_ALREADY_EXISTS')==="true"){
      cy.createHseUser_ExistingDepartment(Cypress.env('Employee4_NAME'),Cypress.env('Employee4_LOGIN_NAME'),Cypress.env('Employee4_EMAIL'),Cypress.env('Employee4_DEPARTMENT'),Cypress.env('Employee4_IS_MANAGER'))
    }else{
      cy.createHseUser_NewDepartment(Cypress.env('Employee4_NAME'),Cypress.env('Employee4_LOGIN_NAME'),Cypress.env('Employee4_EMAIL'),Cypress.env('Employee4_DEPARTMENT'),Cypress.env('Employee4_IS_MANAGER'))
    }
  }
}
if(Cypress.env('NUMBER_OF_EMPLOYEES')>4){
  addEmployee5=()=>{
    if(Cypress.env('Employee5_DEPARTMENT_ALREADY_EXISTS')==="true"){
      cy.createHseUser_ExistingDepartment(Cypress.env('Employee5_NAME'),Cypress.env('Employee5_LOGIN_NAME'),Cypress.env('Employee5_EMAIL'),Cypress.env('Employee5_DEPARTMENT'),Cypress.env('Employee5_IS_MANAGER'))
    }else{
      cy.createHseUser_NewDepartment(Cypress.env('Employee5_NAME'),Cypress.env('Employee5_LOGIN_NAME'),Cypress.env('Employee5_EMAIL'),Cypress.env('Employee5_DEPARTMENT'),Cypress.env('Employee5_IS_MANAGER'))
    }
  }
}
if(Cypress.env('NUMBER_OF_EMPLOYEES')>5){
  addEmployee6=()=>{
    if(Cypress.env('Employee6_DEPARTMENT_ALREADY_EXISTS')==="true"){
      cy.createHseUser_ExistingDepartment(Cypress.env('Employee6_NAME'),Cypress.env('Employee6_LOGIN_NAME'),Cypress.env('Employee6_EMAIL'),Cypress.env('Employee6_DEPARTMENT'),Cypress.env('Employee6_IS_MANAGER'))
    }else{
      cy.createHseUser_NewDepartment(Cypress.env('Employee6_NAME'),Cypress.env('Employee6_LOGIN_NAME'),Cypress.env('Employee6_EMAIL'),Cypress.env('Employee6_DEPARTMENT'),Cypress.env('Employee6_IS_MANAGER'))
    }
  }
}
if(Cypress.env('NUMBER_OF_EMPLOYEES')>6){
  addEmployee7 = ()=>{
    if(Cypress.env('Employee7_DEPARTMENT_ALREADY_EXISTS')==="true"){
      cy.createHseUser_ExistingDepartment(Cypress.env('Employee7_NAME'),Cypress.env('Employee7_LOGIN_NAME'),Cypress.env('Employee7_EMAIL'),Cypress.env('Employee7_DEPARTMENT'),Cypress.env('Employee7_IS_MANAGER'))
    }else{
      cy.createHseUser_NewDepartment(Cypress.env('Employee7_NAME'),Cypress.env('Employee7_LOGIN_NAME'),Cypress.env('Employee7_EMAIL'),Cypress.env('Employee7_DEPARTMENT'),Cypress.env('Employee7_IS_MANAGER'))
    }
  }
}
if(Cypress.env('NUMBER_OF_EMPLOYEES')>7){
  addEmployee8 = ()=>{
    if(Cypress.env('Employee8_DEPARTMENT_ALREADY_EXISTS')==="true"){
      cy.createHseUser_ExistingDepartment(Cypress.env('Employee8_NAME'),Cypress.env('Employee8_LOGIN_NAME'),Cypress.env('Employee8_EMAIL'),Cypress.env('Employee8_DEPARTMENT'),Cypress.env('Employee8_IS_MANAGER'))
    }else{
      cy.createHseUser_NewDepartment(Cypress.env('Employee8_NAME'),Cypress.env('Employee8_LOGIN_NAME'),Cypress.env('Employee8_EMAIL'),Cypress.env('Employee8_DEPARTMENT'),Cypress.env('Employee8_IS_MANAGER'))
    }
  }
}
if(Cypress.env('NUMBER_OF_EMPLOYEES')>8){
  addEmployee9 = ()=>{
    if(Cypress.env('Employee9_DEPARTMENT_ALREADY_EXISTS')==="true"){
      cy.createHseUser_ExistingDepartment(Cypress.env('Employee9_NAME'),Cypress.env('Employee9_LOGIN_NAME'),Cypress.env('Employee9_EMAIL'),Cypress.env('Employee9_DEPARTMENT'),Cypress.env('Employee9_IS_MANAGER'))
    }else{
      cy.createHseUser_NewDepartment(Cypress.env('Employee9_NAME'),Cypress.env('Employee9_LOGIN_NAME'),Cypress.env('Employee9_EMAIL'),Cypress.env('Employee9_DEPARTMENT'),Cypress.env('Employee9_IS_MANAGER'))
    }
  }
}

const CreatedNotificationsMessage =   
`
#### Created Notifications:

|Type|Name|
|--|--|
|Training|Take 5 Step Back and Think|
|Training|Workshop - Common Hazards|
|SOP|SOP Library|
  
`

const CreatedCompanyInHSEMessage =   
`
#### (From CypressIO Automation)

|New company created in:|Company name:|
|--|--|
|${Cypress.env('HSE_URL')} |${Cypress.env('COMPANY_NAME')} |
  
`

describe('Create new HSE company, induction process, users etc', () => {

  it('Create new company in HSE Connect', () => {
    // Login to HSE Preview
    cy.visit(Cypress.env('HSE_URL'))

    // Login as super user
    cy.get('#login_name').type(Cypress.env('HSE_SUPER_USER_LOGIN_NAME'))
    cy.get('#password').type(Cypress.env('HSE_SUPER_USER_PW'))
    cy.get('.ng-scope.ng-dirty > .button').click()

    // Add new Company
      // Select New Company
      cy.get('.clearfix.ng-binding > .button').should('exist').click()
      cy.location('pathname').should('eq','/Administrator/Company')

      // Add Company name
      cy.wait(mediumWait)
      cy.get('#company_name').type(Cypress.env('COMPANY_NAME'))

      // Expiry Data
      cy.get('#expiry_date').clear().type('31-12-2040')
      cy.get('.date_picker > .glyphicon').click()

      // Check `Receive Monthly User Report`
      cy.get('#monthly_reports').should('exist').click()

      // Contact Details
        // Add Contact person
        cy.get('#contact_person')
        .type(Cypress.env('MAIN_CONTACT_FIRST_NAME'))
        .type(' ')
        .type(Cypress.env('MAIN_CONTACT_LAST_NAME'))

        // Add email address
        cy.get('#email').type(Cypress.env('MAIN_CONTACT_EMAIL'))

        // Add phone number
        cy.get('#phone').type(Cypress.env('MAIN_CONTACT_PHONE_NUMBER'))

        // Add mobile number
        cy.get('#mobile').type(Cypress.env('MAIN_CONTACT_MOBILE_NUMBER'))

        // Add Address
        cy.get('#address').type(Cypress.env('COMPANY_ADDRESS'))
      // Save Company
      cy.get('.Save').click()
      cy.wait(shortWait)

    cy.ticketInternalNote(CreatedCompanyInHSEMessage)


    // Manage new Company
    cy.get('.pull-right > .ng-scope').click()
    cy.location('pathname').should('eq','/HSEManager')
    cy.wait(shortWait)


    // Create Worker Induction
      // Select Induction
      cy.get('ng-transclude.ng-scope > :nth-child(1)').should('exist').click()
      cy.wait(shortWait)
      cy.location('pathname').should('eq','/HSEManager/Induction')

      // Select Worker Induction
      cy.get('.body-content > :nth-child(1) > .bg-primary').should('exist').click()

      // Select Add Question
      cy.wait(shortWait)
      cy.get('.comment_button').should('exist').click()

      // Add Question Title
      cy.get('.ng-pristine').type('I reviewed, understand and agree with')

      // Add 6 x Checklist Options
      cy.get('.option_button > .button').should('exist')
      .click()
      .click()
      .click()
      .click()
      .click()
      .click()

      // Fill in options
      cy.get(':nth-child(1) > .form-control').type('Drugs and Alcohol Policy')
      cy.get(':nth-child(2) > .form-control').type('Emergency Plan')
      cy.get(':nth-child(3) > .form-control').type('Health and Safety Policy')
      cy.get(':nth-child(4) > .form-control').type('How to Complete Training')
      cy.get(':nth-child(5) > .form-control').type('How to report a Risk-Good Job')
      cy.get(':nth-child(6) > .form-control').type('Rehabilitation (Return to Work Policy)')

      // Save induction
      cy.get('.pull-right > .button').should('exist').click()
      cy.wait(LongWait)

    // Create Contractor Induction  
      // Select Contractor Induction
      cy.get('.body-content > :nth-child(1) > [ui-sref="HSEManager.induction.contractor"]').should('exist').click()

      // Select Add Question
      cy.wait(shortWait)
      cy.get('.comment_button').should('exist').click()

      // Add Question Title
      cy.get('.ng-pristine').type('I reviewed, understand and agree with')

      // Add 6 x Checklist Options
      cy.get('.option_button > .button').should('exist')
      .click()
      .click()

      // Fill in options
      cy.get(':nth-child(1) > .form-control').type('Contractor Health and Safety Induction')
      cy.get(':nth-child(2) > .form-control').type('How to report a Risk-Good Job')

      // Save induction
      cy.get('.pull-right > .button').should('exist').click()
      cy.wait(LongWait)

    // Create Visitor Induction  
      // Select Visitor Induction
      cy.get('.body-content > :nth-child(1) > [ui-sref="HSEManager.induction.visitor"]').should('exist').click()

      // Select Add Question
      cy.wait(shortWait)
      cy.get('.comment_button').should('exist').click()

      // Add Question Title
      cy.get('.ng-pristine').type('I reviewed, understand and agree with')

      // Add 6 x Checklist Options
      cy.get('.option_button > .button').should('exist')
      .click()

      // Fill in options
      cy.get(':nth-child(1) > .form-control').type('Visitor Induction')

      // Save induction
      cy.get('.pull-right > .button').should('exist').click()
      cy.wait(LongWait)

    cy.ticketInternalNote(`
      New induction questions created for ${Cypress.env('COMPANY_NAME')} 
    `)


    






///////////// Shortcut to existing company

    // // Login to HSE Preview
    // cy.visit(Cypress.env('HSE_URL'))

    // // Login as super user
    // cy.get('#login_name').type(Cypress.env('HSE_SUPER_USER_LOGIN_NAME'))
    // cy.get('#password').type(Cypress.env('HSE_SUPER_USER_PW'))
    // cy.get('.ng-scope.ng-dirty > .button').click()

    // // manage company
    // cy.wait(mediumWait)
    // cy.get('.search_box > .ng-pristine').type(Cypress.env('COMPANY_NAME'))
    // cy.wait(mediumWait)
    // cy.get('.standard').click()


///////////////






    // Add Users
      // Select users & Settings
      cy.get('[ui-sref="HSEManager.settings.users"]').should('exist').click()
      cy.location('pathname').should('eq','/HSEManager/Settings/Users')

      // Add main contact
        // Select New User
        cy.get('.report > div.ng-scope > .ng-scope > h2.clearfix > .button').should('exist').click()
        cy.wait(LongWait)

        // Add login name
        cy.get(':nth-child(1) > :nth-child(2) > :nth-child(2) > :nth-child(2) > [placeholder="Login Name"][type="text"]').type(Cypress.env('MAIN_CONTACT_EMAIL'))
        cy.wait(shortWait)

        // Add display name
        cy.get(':nth-child(1) > .textbox').type(Cypress.env('MAIN_CONTACT_USERNAME'))
        cy.wait(shortWait)

        // Add Password
        cy.get('.padding-right-sm').type(Cypress.env('MAIN_CONTACT_PASSWORD'))
        cy.wait(shortWait)
        // Add Email
        cy.get(':nth-child(2) > .input_content > .clearfix > :nth-child(1) > .ng-pristine').type(Cypress.env('MAIN_CONTACT_EMAIL'))
        cy.wait(shortWait)

        // Add role (HSE Manager)
        cy.get('.padding-right-col-sm > .dropdown > .button').click()
        cy.get('.HSEManager_check').click()

        // Induct HSE Manager checkbutton
        cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(1) > :nth-child(1) > .ng-pristine').click()


        // Save user
        cy.get('.pull-right > .button').should('exist').click()
        cy.wait(shortWait)
        cy.ticketInternalNote(`
          Created HSE Manager in ${Cypress.env('COMPANY_NAME')}`)

        // Go Back
        cy.get('.clearfix.ng-binding > .button').should('exist').click()

        

      //Conditionally add users. Number depends on Cypress.env('NUMBER_OF_EMPLOYEES') 
      addEmployee1()
      addEmployee2()
      addEmployee3()
      addEmployee4()
      addEmployee5()
      addEmployee6()
      addEmployee7()
      addEmployee8()
      addEmployee9()

     
    
    // Add site
      // Select Company Settings
      cy.get('.hidden-print > [ui-sref="HSEManager.settings.companySettings"]').should('exist').click()
      cy.wait(shortWait)
      
      // Add company address under sites
      cy.get('#site-title').type(Cypress.env('COMPANY_ADDRESS'))
      cy.get('.input_content > .button_ghost').should('exist').click()

      // Press Save
      cy.get('h3 > .pull-right > .button').should('exist').click()

    // Add training notifications - MTA only

      if(Cypress.env('IS_MTA')){
      // Take 5 Step Back and Think - Training
        // select `Notifications` from top menu   
        cy.get(':nth-child(3) > .hidden-xs > div').contains('Notifications').should('exist').click()

        // select `+ New Training` Button
        cy.get('h2.clearfix > .button').contains('New Training').click()

        // Add Notification Title 
        cy.wait(shortWait)
        cy.get('.col-sm-9 > .ng-pristine').type("Take 5 Step Back and Think")

        // Select `Training` Radio
        cy.get(':nth-child(2) > :nth-child(1) > .control > .ng-pristine').should('exist').click()

        // Select All departments button
        cy.get('.border-top').contains('Select All').click()

        // Add Due date (4 weeks from now)
        cy.get('.date_picker > .ng-isolate-scope').click().type(Cypress.env('TRAINING_DUE_DATE'))
        
        // Add Question Button
        cy.get('.comment_button').should('exist').click()
          // Add Question Title
          cy.get('.col-lg-6 > .ng-pristine').type('I reviewed, understand and agree with')
          // Add option button
          cy.get('.option_button > .button').should('exist').click()
          // Enter option text
          cy.get('.form-control').type('Take 5 Step Back and Think')
        // Save notification
        cy.get('.pull-right > .button').should('exist').click()

        // Select Back button
        cy.wait(LongWait)
        cy.get('h2.clearfix > .button').contains('Back').click()

      // Workshop - Common Hazards - Training
        // select `+ New Training` Button
        cy.get('h2.clearfix > .button').contains('New Training').click()

        // Add Notification Title
        cy.wait(shortWait)
        cy.get('.col-sm-9 > .ng-pristine').type("Workshop - Common Hazards")

        // Select `Training` Radio
        cy.get(':nth-child(2) > :nth-child(1) > .control > .ng-pristine').should('exist').click()

        // Select All departments button
        cy.get('.border-top').contains('Select All').click()

        // Add Due date (4 weeks from now)
        cy.get('.date_picker > .ng-isolate-scope').click().type(Cypress.env('TRAINING_DUE_DATE'))
        
        // Add Question Button
        cy.get('.comment_button').should('exist').click()
          // Add Question Title
          cy.get('.col-lg-6 > .ng-pristine').type('I reviewed, understand and agree with')
          // Add option button
          cy.get('.option_button > .button').should('exist').click()
          // Enter option text
          cy.get('.form-control').type('Workshop - Common Hazards')
        // Save notification
        cy.get('.pull-right > .button').should('exist').click()

        // Select Back button
        cy.wait(LongWait)
        cy.get('h2.clearfix > .button').contains('Back').click()

      // SOP notification - SOP Library
        // select `+ New Training` Button
        cy.get('h2.clearfix > .button').contains('New Training').click()

        // Add Notification Title
        cy.wait(shortWait)
        cy.get('.col-sm-9 > .ng-pristine').type("SOP Library")

        // Select `SOP` Radio
        cy.get(':nth-child(4) > .control > .ng-pristine').should('exist').click()

        // Select All departments button
        cy.get('.border-top').contains('Select All').click()

        // Add Due date (4 weeks from now)
        cy.get('.date_picker > .ng-isolate-scope').click().type(Cypress.env('TRAINING_DUE_DATE'))
        
        // Add Question Button
        cy.get('.comment_button').should('exist').click()
          // Add Question Title
          cy.get('.col-lg-6 > .ng-pristine').type('I reviewed, understand and agree with')
          // Add option button
          cy.get('.option_button > .button').should('exist').click()
          // Enter option text
          cy.get('.form-control').type('SOP Library')
        // Save notification
        cy.get('.pull-right > .button').should('exist').click()

        // Select Back button
        cy.wait(LongWait)
        cy.get('h2.clearfix > .button').contains('Back').click()

        cy.ticketInternalNote(CreatedNotificationsMessage)


      }



  })

  it('Create contacts in Lancom Button', () => {
    // Do with webhook to Power Automate. Flow is here -> `https://make.powerautomate.com/environments/2e21e621-fcf3-eae1-a4d1-9e02b3152fc8/flows/96d7de0a-c2fb-4a1b-940e-e541d79058b4/runs/08584732557519775569424720085CU26`
    cy.createContact(`${Cypress.env('MAIN_CONTACT_FIRST_NAME')}`, `${Cypress.env('MAIN_CONTACT_EMAIL')}`)
    cy.ticketInternalNote(`Created main contact in lancom button`)


    // Create other contacts if they are manager
    for (let current=Cypress.env('NUMBER_OF_EMPLOYEES');current > 0;current--){
      if(Cypress.env(`Employee${current}_IS_MANAGER`)){
        cy.createContact(`${Cypress.env(`Employee${current}_NAME`)}`, `${Cypress.env(`Employee${current}_EMAIL`)}`)
      }
    }
  })

  let pwLink 
  it('Create secure HSE Manager password link with https://1ty.me/', () => {
    
    
    cy.visit('https://1ty.me/')
    cy.get('#note_box_main').type(Cypress.env('MAIN_CONTACT_PASSWORD'))
    
    // Generate link
    cy.get(':nth-child(1) > .btn').click()
    cy.wait(mediumWait)

    // Copy Link
    cy.get('#link').invoke('val').as('extractedText'); 
    cy.get('@extractedText').then((text) => {
      cy.log(`Extracted text is: ${text}`);
      pwLink = text
    });

  }
)

  it('Internal note welcome email template on onboarding ticket', () => {
  // Do with webhook to Power Automate. Flow is here -> `https://make.powerautomate.com/environments/2e21e621-fcf3-eae1-a4d1-9e02b3152fc8/flows/96d7de0a-c2fb-4a1b-940e-e541d79058b4/runs/08584732557519775569424720085CU26`
  
  let welcomeEmailNote = 
  `
  #### For the welcome email:

  ***
  ##### *HSE Manager:*

  |HSE Manager Login Name|HSE Manager PW Link|
  |--|--| 
  |${Cypress.env('MAIN_CONTACT_EMAIL')}|${pwLink}|


  ***
  ##### *Employee Login Details:*

  | Employee Name | HSE Connect Login Name |
  | ------------- | ---------------------- |
  `

  // add employees to welcome note based on how many there are
  for(let i = 1; i <= Cypress.env('NUMBER_OF_EMPLOYEES') ; i++){
    welcomeEmailNote += `|${Cypress.env(`Employee${i}_NAME`)}|${Cypress.env(`Employee${i}_LOGIN_NAME`)}|
    `
  }
  
  cy.ticketInternalNote(welcomeEmailNote)
  }
)


  it.only('Tasklist added for remaining tasks on onboarding ticket', () => {
    // Do with webhook to Power Automate. Flow is here -> `https://make.powerautomate.com/environments/2e21e621-fcf3-eae1-a4d1-9e02b3152fc8/flows/96d7de0a-c2fb-4a1b-940e-e541d79058b4/runs/08584732557519775569424720085CU26`
    cy.addTasklistToTicket()

    cy.ticketInternalNote(`
    Automation complete. A tasklist has been added for remaining tasks
    `)

  }
)


})