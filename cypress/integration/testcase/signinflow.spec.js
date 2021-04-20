/// <reference types="cypress" />
describe('Check Signin flow', () => {

    it('Signin for classes', () => {
        cy.visit('https://pubninja.academy/', { failOnStatusCode: false });
        cy.setCookie('jToken', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI4NmJmOGM0OS1jYjEzLTQxZjMtYjQ1Mi1kMDExOWU5NWIxMjkiLCJkb21haW5JZCI6IjkwOTMiLCJpYXQiOjE2MDY3NDI0MjAsInJvbGUiOiJhdWRpZW5jZSIsImlzcyI6InB1Ym5pbmphX3VzZXJfc2VydmljZSJ9.JCuQDJhcPzwPkmSHCiQGAQofrGv2kLhLdbnzLAtCrbI');
        cy.wait(500);
        cy.reload();
        cy.scrollTo('center');
        cy.xpath("//a[@class='header-link transparent-actions primary-button']").click();
        cy.wait(1000);
        cy.xpath("//*[contains(text(),'Pottery and Clay Modelling For Kids: Learn Pot Making and Clay Modelling')]").click();
        // cy.get('.plan-name sub-heading').contains('Pottery and Clay Modelling For Kids: Learn Pot Making and Clay Modelling').click();
        cy.xpath("//div[@id='loginlogoutid']").last().click();
        cy.wait(1000);
        cy.xpath("//button[@id='create-team-cta']").click({ force: true });
        cy.reload();



        //trial button
        // cy.xpath("//div[@id='trial-access-button']").click(); 
        // cy.xpath("//button[@id='create-team-cta']").click();


    })
})