// <reference types="cypress" />

function assertProductPrice(url){
  cy.visit(url, { failOnStatusCode: false });
        cy.wait(1500)

          cy.contains('Enroll Now').click({force: true});
          cy.wait(2500)
          cy.xpath("//div[@class='text-right col col-6']").last().invoke('text').then(function(text1){
          cy.contains('Pay Now').click({force: true});
          cy.xpath("//span[@class='h1 css-1woqoor bold m--1 svelte-p3dboo']").last().invoke('text').then(function(text2){
          expect(text1).to.equal('₹'+text2.slice(0,text2.length-1));
          
        })
      
      })
     
    

describe ('Check Classes Pricing', () => {

  beforeEach(() => {
    window.localStorage.setItem('accessToken', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI3ZGVjODU2Mi1kYWI3LTQ2ZWMtODVkNC03MDQ0MGYzNWEyNjciLCJkb21haW5JZCI6IjkwOTMiLCJpYXQiOjE2MTgzMDU0MjgsInJvbGUiOiJhdWRpZW5jZSIsImlzcyI6InB1Ym5pbmphX3VzZXJfc2VydmljZSJ9.fL7MxdqEHOkdyrVys5tfB2R65NzOnC7KPWPXKz_yOCI');
  });
  
    it('Check Product_id 2199', () => {
      assertProductPrice('https://pubninja.academy/product/2116')

    })

    it('Check Product_id 2085', () => {
      assertProductPrice('https://pubninja.academy/product/')
    
    })

    it('Check Product_id 2459', () => {
      assertProductPrice('https://pubninja.academy/product/2459')
    
    })
  
  })

}

