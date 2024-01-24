const Path = require('../e_shop/path');
const Categories = require('../../components/e_shop/categories');
class HomePage {
  constructor() {
    this.path = new Path();
    this.categories = new Categories();
  }

  get registerBttn() { return cy.get('.ico-register'); }
  get loginBttn() { return cy.get('.ico-login'); }
  get accountInfo() { return cy.get('.header-links > ul > :nth-child(1) > .account'); }

  open() { 
    cy.visit(this.path.baseUrl);
  }
  
}

module.exports = HomePage;