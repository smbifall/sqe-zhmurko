const OurLocations = require("../../components/epam/ourLocations");
const Header = require("../../components/epam/header");

class HomePage {

  constructor() {
    this.ourLocations = new OurLocations();
    this.header = new Header();
  }

  get urlEpamGlobal() { return 'https://www.epam.com/'; }
  get urlEpamUA() { return 'https://careers.epam.ua'; }
  get epamTitle() { return cy.title(); }
  get epamLogo() { return cy.get('.desktop-logo > .header__logo-light'); }
  get policiesLinks() { return cy.get('.policies-links-wrapper .fat-links'); }

  open() { 
    cy.visit('https://www.epam.com/'); 
  }
  getCurrentTheme() {
    return cy.get('body').invoke('attr', 'class')
      .then((classValue) => { return classValue.includes('dark-mode') ? 'dark-mode' : 'light-mode'; });
  }
  
}

module.exports = HomePage;