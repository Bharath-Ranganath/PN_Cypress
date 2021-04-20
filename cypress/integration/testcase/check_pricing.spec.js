/// <reference types="cypress" />

describe ('Check Class Pricing', () => {
  
    beforeEach(() => {
      window.localStorage.setItem('accessToken', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxNTg4OWJjOC05NWM3LTQyZWUtYWQ1My02NmMzNjMyZDQyNDEiLCJkb21haW5JZCI6IjkwOTMiLCJpYXQiOjE2MTg1MTczMDEsInJvbGUiOiJhdWRpZW5jZSIsImlzcyI6InB1Ym5pbmphX3VzZXJfc2VydmljZSJ9.oHm_gVqlnnQzcbO4xz0441-g9PFNKnyR6kn0PAqgMNI');
    });
    
      it('Check Product_id 2371', () => {
        cy.assertProductPrice('https://pubninja.academy/product/2373');
  
      })

      it('Check Product_id 2300', () => {
        cy.assertProductPrice('https://pubninja.academy/product/2300');
  
      })

      it('Check Product_id 2453', () => {
        cy.assertProductPrice('https://pubninja.academy/product/2453');
  
      })

      it('Check Product_id 2443', () => {
        cy.assertProductPrice('https://pubninja.academy/product/2443');
  
      })

      it('Check Product_id 2424', () => {
        cy.assertProductPrice('https://pubninja.academy/product/2424');
  
      })

      it('Check Product_id 2417', () => {
        cy.assertProductPrice('https://pubninja.academy/product/2417');
  
      })

      it('Check Product_id 2414', () => {
        cy.assertProductPrice('https://pubninja.academy/product/2414');
  
      })

      it('Check Product_id 2385', () => {
        cy.assertProductPrice('https://pubninja.academy/product/2385');
  
      })

      it('Check Product_id 2374', () => {
        cy.assertProductPrice('https://pubninja.academy/product/2374');
  
      })

      it('Check Product_id 2367', () => {
        cy.assertProductPrice('https://pubninja.academy/product/2367');
  
      })


    })
