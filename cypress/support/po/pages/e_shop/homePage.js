const Path = require('../e_shop/path');

const path = new Path();

class HomePage {

  get registerBttn() { return cy.get('.ico-register'); }
  get loginBttn() { return cy.get('.ico-login'); }
  get accountInfo() { return cy.get('.header-links > ul > :nth-child(1) > .account'); }

  open() { 
    cy.visit(path.baseUrl);
  }
  
}

module.exports = HomePage;