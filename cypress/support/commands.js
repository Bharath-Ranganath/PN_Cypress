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
// Cypress.Commands.add('login', (email, password) => { ... })
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




Cypress.Commands.add('assertProductPrice', (url)=>{
    cy.visit(url, { failOnStatusCode: false });
    cy.wait(2000)
    cy.get("body").then($body => {
    if ($body.text().includes('Remaining')) {
            cy.xpath("//*[contains(text(),'Enroll Now')]").click({ multiple: true, force: true })
            cy.wait(2500)
            cy.xpath("//div[@class='text-right col col-6']").last().invoke('text').then(function(text1){
        cy.contains('Pay Now').click({force: true});
        cy.wait(7000)
        cy.xpath("//span[@class='h1 css-1woqoor bold m--1 svelte-p3dboo']").last().invoke('text').then(function(text2){
        expect(text1).to.equal('₹'+text2.slice(0,text2.length-1));

            })
        });  

 } else { 
    assert.isOk('Request Batch');
      }
    })
})

 
  

