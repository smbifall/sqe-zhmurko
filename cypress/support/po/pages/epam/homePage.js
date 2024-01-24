const OurLocations = require("../../components/epam/ourLocations");
const Header = require("../../components/epam/header");
const Path = require("../../pages/epam/path");

class HomePage {

  constructor() {
    this.ourLocations = new OurLocations();
    this.header = new Header();
    this.path = new Path();
  }

  get epamTitle() { return cy.title(); }
  get epamLogo() { return cy.get('.desktop-logo > .header__logo-light'); }
  get policiesLinks() { return cy.get('.policies-links-wrapper .fat-links'); }

  open() { 
    cy.visit(this.path.epamGlobal);
  }
  getCurrentTheme() {
    return cy.get('body').invoke('attr', 'class')
      .then((classValue) => { return classValue.includes('dark-mode') ? 'dark-mode' : 'light-mode'; });
  }
  
}

module.exports = HomePage;