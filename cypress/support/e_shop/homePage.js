class HomePage {
  
  // Elements
  get registerButton() { return cy.get('.ico-register'); }
  get loginButton() { return cy.get('.ico-login'); }

  // Functions
  open() { 
    cy.visit('https://demowebshop.tricentis.com/');
  }
}

module.exports = HomePage;