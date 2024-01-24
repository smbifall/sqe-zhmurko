const Path = require('../e_shop/path');

const path = new Path();

class HomePage {

  get registerBttn() { return cy.get('.ico-register'); }
  get loginBttn() { return cy.get('.ico-login'); }

  open() { 
    cy.visit(path.baseUrl);
  }
  
}

module.exports = HomePage;