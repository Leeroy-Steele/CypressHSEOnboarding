

let shortWait = 1000
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
if(Cypress.env('NUMBER_OF_EMPLOYEES')>0){
  addEmployee1=()=>{
    // Select New User
    cy.get('.report > div.ng-scope > .ng-scope > h2.clearfix > .button').should('exist').click()
    cy.wait(LongWait)
    // Add login name
    cy.get(':nth-child(1) > :nth-child(2) > :nth-child(2) > :nth-child(2) > [placeholder="Login Name"][type="text"]').type(Cypress.env('Employee1_EMAIL'))
    cy.wait(shortWait)
    // Add display name
    cy.get(':nth-child(1) > .textbox').type(Cypress.env('Employee1_NAME'))
    cy.wait(shortWait)
    // Add Email
    cy.get(':nth-child(2) > .input_content > .clearfix > :nth-child(1) > .ng-pristine').type(Cypress.env('Employee1_EMAIL'))
    cy.wait(shortWait)
    // Save user
    cy.get('.pull-right > .button').should('exist').click()
    cy.wait(shortWait)
    // Go Back
    cy.get('.clearfix.ng-binding > .button').should('exist').click()
  }
}
if(Cypress.env('NUMBER_OF_EMPLOYEES')>1){
  addEmployee2=()=>{
    // Select New User
    cy.get('.report > div.ng-scope > .ng-scope > h2.clearfix > .button').should('exist').click()
    cy.wait(LongWait)
        // Add login name
        cy.get(':nth-child(1) > :nth-child(2) > :nth-child(2) > :nth-child(2) > [placeholder="Login Name"][type="text"]').type(Cypress.env('Employee2_EMAIL'))
        cy.wait(shortWait)
    // Add display name
    cy.get(':nth-child(1) > .textbox').type(Cypress.env('Employee2_NAME'))
    cy.wait(shortWait)

    // Add Email
    cy.get(':nth-child(2) > .input_content > .clearfix > :nth-child(1) > .ng-pristine').type(Cypress.env('Employee2_EMAIL'))
    cy.wait(shortWait)
    // Save user
    cy.get('.pull-right > .button').should('exist').click()
    cy.wait(shortWait)
    // Go Back
    cy.get('.clearfix.ng-binding > .button').should('exist').click()
  }
}
if(Cypress.env('NUMBER_OF_EMPLOYEES')>2){
  addEmployee3 = ()=>{
    // Select New User
    cy.get('.report > div.ng-scope > .ng-scope > h2.clearfix > .button').should('exist').click()
    cy.wait(LongWait)
        // Add login name
        cy.get(':nth-child(1) > :nth-child(2) > :nth-child(2) > :nth-child(2) > [placeholder="Login Name"][type="text"]').type(Cypress.env('Employee3_EMAIL'))
        cy.wait(shortWait)
    // Add display name
    cy.get(':nth-child(1) > .textbox').type(Cypress.env('Employee3_NAME'))
    cy.wait(shortWait)

    // Add Email
    cy.get(':nth-child(2) > .input_content > .clearfix > :nth-child(1) > .ng-pristine').type(Cypress.env('Employee3_EMAIL'))
    cy.wait(shortWait)
    // Save user
    cy.get('.pull-right > .button').should('exist').click()
    cy.wait(shortWait)
    // Go Back
    cy.get('.clearfix.ng-binding > .button').should('exist').click()
  }
}
if(Cypress.env('NUMBER_OF_EMPLOYEES')>3){
  addEmployee3 = ()=>{
    // Select New User
    cy.get('.report > div.ng-scope > .ng-scope > h2.clearfix > .button').should('exist').click()
    cy.wait(LongWait)
        // Add login name
        cy.get(':nth-child(1) > :nth-child(2) > :nth-child(2) > :nth-child(2) > [placeholder="Login Name"][type="text"]').type(Cypress.env('Employee4_EMAIL'))
        cy.wait(shortWait)
    // Add display name
    cy.get(':nth-child(1) > .textbox').type(Cypress.env('Employee4_NAME'))
    cy.wait(shortWait)

    // Add Email
    cy.get(':nth-child(2) > .input_content > .clearfix > :nth-child(1) > .ng-pristine').type(Cypress.env('Employee4_EMAIL'))
    cy.wait(shortWait)
    // Save user
    cy.get('.pull-right > .button').should('exist').click()
    cy.wait(shortWait)
    // Go Back
    cy.get('.clearfix.ng-binding > .button').should('exist').click()
  }
}
if(Cypress.env('NUMBER_OF_EMPLOYEES')>4){
  addEmployee1=()=>{
    // Select New User
    cy.get('.report > div.ng-scope > .ng-scope > h2.clearfix > .button').should('exist').click()
    cy.wait(LongWait)
    // Add login name
    cy.get(':nth-child(1) > :nth-child(2) > :nth-child(2) > :nth-child(2) > [placeholder="Login Name"][type="text"]').type(Cypress.env('Employee5_EMAIL'))
    cy.wait(shortWait)
    // Add display name
    cy.get(':nth-child(1) > .textbox').type(Cypress.env('Employee5_NAME'))
    cy.wait(shortWait)
    // Add Email
    cy.get(':nth-child(2) > .input_content > .clearfix > :nth-child(1) > .ng-pristine').type(Cypress.env('Employee5_EMAIL'))
    cy.wait(shortWait)
    // Save user
    cy.get('.pull-right > .button').should('exist').click()
    cy.wait(shortWait)
    // Go Back
    cy.get('.clearfix.ng-binding > .button').should('exist').click()
  }
}
if(Cypress.env('NUMBER_OF_EMPLOYEES')>5){
  addEmployee2=()=>{
    // Select New User
    cy.get('.report > div.ng-scope > .ng-scope > h2.clearfix > .button').should('exist').click()
    cy.wait(LongWait)
        // Add login name
        cy.get(':nth-child(1) > :nth-child(2) > :nth-child(2) > :nth-child(2) > [placeholder="Login Name"][type="text"]').type(Cypress.env('Employee6_EMAIL'))
        cy.wait(shortWait)
    // Add display name
    cy.get(':nth-child(1) > .textbox').type(Cypress.env('Employee6_NAME'))
    cy.wait(shortWait)

    // Add Email
    cy.get(':nth-child(2) > .input_content > .clearfix > :nth-child(1) > .ng-pristine').type(Cypress.env('Employee6_EMAIL'))
    cy.wait(shortWait)
    // Save user
    cy.get('.pull-right > .button').should('exist').click()
    cy.wait(shortWait)
    // Go Back
    cy.get('.clearfix.ng-binding > .button').should('exist').click()
  }
}
if(Cypress.env('NUMBER_OF_EMPLOYEES')>6){
  addEmployee3 = ()=>{
    // Select New User
    cy.get('.report > div.ng-scope > .ng-scope > h2.clearfix > .button').should('exist').click()
    cy.wait(LongWait)
        // Add login name
        cy.get(':nth-child(1) > :nth-child(2) > :nth-child(2) > :nth-child(2) > [placeholder="Login Name"][type="text"]').type(Cypress.env('Employee7_EMAIL'))
        cy.wait(shortWait)
    // Add display name
    cy.get(':nth-child(1) > .textbox').type(Cypress.env('Employee7_NAME'))
    cy.wait(shortWait)

    // Add Email
    cy.get(':nth-child(2) > .input_content > .clearfix > :nth-child(1) > .ng-pristine').type(Cypress.env('Employee7_EMAIL'))
    cy.wait(shortWait)
    // Save user
    cy.get('.pull-right > .button').should('exist').click()
    cy.wait(shortWait)
    // Go Back
    cy.get('.clearfix.ng-binding > .button').should('exist').click()
  }
}
if(Cypress.env('NUMBER_OF_EMPLOYEES')>7){
  addEmployee3 = ()=>{
    // Select New User
    cy.get('.report > div.ng-scope > .ng-scope > h2.clearfix > .button').should('exist').click()
    cy.wait(LongWait)
        // Add login name
        cy.get(':nth-child(1) > :nth-child(2) > :nth-child(2) > :nth-child(2) > [placeholder="Login Name"][type="text"]').type(Cypress.env('Employee8_EMAIL'))
        cy.wait(shortWait)
    // Add display name
    cy.get(':nth-child(1) > .textbox').type(Cypress.env('Employee8_NAME'))
    cy.wait(shortWait)

    // Add Email
    cy.get(':nth-child(2) > .input_content > .clearfix > :nth-child(1) > .ng-pristine').type(Cypress.env('Employee8_EMAIL'))
    cy.wait(shortWait)
    // Save user
    cy.get('.pull-right > .button').should('exist').click()
    cy.wait(shortWait)
    // Go Back
    cy.get('.clearfix.ng-binding > .button').should('exist').click()
  }
}




describe('Create new HSE company, induction process, users etc', () => {

  it('Create new company in HSE Connect', () => {
    // // Login to HSE Preview
    cy.visit(Cypress.env('HSE_PREVIEW_URL'))
    cy.ticketInternalNote('Hello 123')

    // // Login as super user
    // cy.get('#login_name').type(Cypress.env('HSE_SUPER_USER_LOGIN_NAME'))
    // cy.get('#password').type(Cypress.env('HSE_SUPER_USER_PW'))
    // cy.get('.ng-scope.ng-dirty > .button').click()

    // // Add new Company
    //   // Select New Company
    //   cy.get('.clearfix.ng-binding > .button').should('exist').click()
    //   cy.location('pathname').should('eq','/Administrator/Company')

    //   // Add Company name
    //   cy.wait(shortWait)
    //   cy.get('#company_name').type(Cypress.env('COMPANY_NAME'))

    //   // Expiry Data
    //   cy.get('#expiry_date').clear().type('31-12-2040')
    //   cy.get('.date_picker > .glyphicon').click()

    //   // Check `Receive Monthly User Report`
    //   cy.get('#monthly_reports').should('exist').click()

    //   // Contact Details
    //     // Add Contact person
    //     cy.get('#contact_person')
    //     .type(Cypress.env('MAIN_CONTACT_FIRST_NAME'))
    //     .type(' ')
    //     .type(Cypress.env('MAIN_CONTACT_LAST_NAME'))

    //     // Add email address
    //     cy.get('#email').type(Cypress.env('MAIN_CONTACT_EMAIL'))

    //     // Add phone number
    //     cy.get('#phone').type(Cypress.env('MAIN_CONTACT_PHONE_NUMBER'))

    //     // Add mobile number
    //     cy.get('#mobile').type(Cypress.env('MAIN_CONTACT_MOBILE_NUMBER'))

    //     // Add Address
    //     cy.get('#address').type(Cypress.env('COMPANY_ADDRESS'))
    //   // Save Company
    //   cy.get('.Save').click()
    //   cy.wait(shortWait)






    // // Manage new Company
    // cy.get('.pull-right > .ng-scope').click()
    // cy.location('pathname').should('eq','/HSEManager')
    // cy.wait(shortWait)


    // // Create Worker Induction
    //   // Select Induction
    //   cy.get('ng-transclude.ng-scope > :nth-child(1)').should('exist').click()
    //   cy.wait(shortWait)
    //   cy.location('pathname').should('eq','/HSEManager/Induction')

    //   // Select Worker Induction
    //   cy.get('.body-content > :nth-child(1) > .bg-primary').should('exist').click()

    //   // Select Add Question
    //   cy.wait(shortWait)
    //   cy.get('.comment_button').should('exist').click()

    //   // Add Question Title
    //   cy.get('.ng-pristine').type('I reviewed, understand and agree with')

    //   // Add 6 x Checklist Options
    //   cy.get('.option_button > .button').should('exist')
    //   .click()
    //   .click()
    //   .click()
    //   .click()
    //   .click()
    //   .click()

    //   // Fill in options
    //   cy.get(':nth-child(1) > .form-control').type('Drugs and Alcohol Policy')
    //   cy.get(':nth-child(2) > .form-control').type('Emergency Plan')
    //   cy.get(':nth-child(3) > .form-control').type('Health and Safety Policy')
    //   cy.get(':nth-child(4) > .form-control').type('How to Complete Training')
    //   cy.get(':nth-child(5) > .form-control').type('How to report a Risk-Good Job')
    //   cy.get(':nth-child(6) > .form-control').type('Rehabilitation (Return to Work Policy)')

    //   // Save induction
    //   cy.get('.pull-right > .button').should('exist').click()
    //   cy.wait(LongWait)

    // // Create Contractor Induction  
    //   // Select Contractor Induction
    //   cy.get('.body-content > :nth-child(1) > [ui-sref="HSEManager.induction.contractor"]').should('exist').click()

    //   // Select Add Question
    //   cy.wait(shortWait)
    //   cy.get('.comment_button').should('exist').click()

    //   // Add Question Title
    //   cy.get('.ng-pristine').type('I reviewed, understand and agree with')

    //   // Add 6 x Checklist Options
    //   cy.get('.option_button > .button').should('exist')
    //   .click()
    //   .click()

    //   // Fill in options
    //   cy.get(':nth-child(1) > .form-control').type('Contractor Health and Safety Induction')
    //   cy.get(':nth-child(2) > .form-control').type('How to report a Risk-Good Job')

    //   // Save induction
    //   cy.get('.pull-right > .button').should('exist').click()
    //   cy.wait(LongWait)

    // // Create Visitor Induction  
    //   // Select Visitor Induction
    //   cy.get('.body-content > :nth-child(1) > [ui-sref="HSEManager.induction.visitor"]').should('exist').click()

    //   // Select Add Question
    //   cy.wait(shortWait)
    //   cy.get('.comment_button').should('exist').click()

    //   // Add Question Title
    //   cy.get('.ng-pristine').type('I reviewed, understand and agree with')

    //   // Add 6 x Checklist Options
    //   cy.get('.option_button > .button').should('exist')
    //   .click()

    //   // Fill in options
    //   cy.get(':nth-child(1) > .form-control').type('Visitor Induction')

    //   // Save induction
    //   cy.get('.pull-right > .button').should('exist').click()
    //   cy.wait(LongWait)




    // // // (During build only - if company already exists)
    // // cy.wait(shortWait)
    // // cy.get('.search_box > .ng-pristine').type('Company from CypressIO')
    // // cy.wait(shortWait)
    // // cy.get('.standard').click()
    // // cy.wait(shortWait)





    // // Add Users
    //   // Select users & Settings
    //   cy.get('[ui-sref="HSEManager.settings.users"]').should('exist').click()
    //   cy.location('pathname').should('eq','/HSEManager/Settings/Users')

    //   // Add main contact
    //     // Select New User
    //     cy.get('.report > div.ng-scope > .ng-scope > h2.clearfix > .button').should('exist').click()
    //     cy.wait(LongWait)

    //     // Add login name
    //     cy.get(':nth-child(1) > :nth-child(2) > :nth-child(2) > :nth-child(2) > [placeholder="Login Name"][type="text"]').type(Cypress.env('MAIN_CONTACT_EMAIL'))
    //     cy.wait(shortWait)

    //     // Add display name
    //     cy.get(':nth-child(1) > .textbox').type(Cypress.env('MAIN_CONTACT_USERNAME'))
    //     cy.wait(shortWait)

    //     // Add Password
    //     cy.get('.padding-right-sm').type(Cypress.env('MAIN_CONTACT_PASSWORD'))
    //     cy.wait(shortWait)
    //     // Add Email
    //     cy.get(':nth-child(2) > .input_content > .clearfix > :nth-child(1) > .ng-pristine').type(Cypress.env('MAIN_CONTACT_EMAIL'))
    //     cy.wait(shortWait)
    //     // Save user
    //     cy.get('.pull-right > .button').should('exist').click()
    //     cy.wait(shortWait)
    //     // Go Back
    //     cy.get('.clearfix.ng-binding > .button').should('exist').click()

    //   //Conditionally add users. Number depends on Cypress.env('NUMBER_OF_EMPLOYEES') 
    //   addEmployee1()
    //   addEmployee2()
    //   addEmployee3()
    //   addEmployee4()
    //   addEmployee5()
    //   addEmployee6()
    //   addEmployee7()
    //   addEmployee8()
  })

  it.only('Create contacts in Lancom Button', () => {
    // Do with webhook to Power Automate. Flow is here -> `https://make.powerautomate.com/environments/2e21e621-fcf3-eae1-a4d1-9e02b3152fc8/flows/96d7de0a-c2fb-4a1b-940e-e541d79058b4/runs/08584732557519775569424720085CU26`
    cy.createContact(`${Cypress.env('MAIN_CONTACT_FIRST_NAME')}`, `${Cypress.env('MAIN_CONTACT_EMAIL')}`)

    // Create other contacts if they are manager
    for (let current=Cypress.env('NUMBER_OF_EMPLOYEES');current > 0;current--){
      if(Cypress.env(`Employee${current}_IS_MANAGER`)){
        cy.createContact(`${Cypress.env(`Employee${current}_NAME`)}`, `${Cypress.env(`Employee${current}_EMAIL`)}`)
      }
    }
  }
)
})