const OurLocations = require("../../components/epam/ourLocations");
const Header = require("../../components/epam/header");

class HomePage {

  constructor() {
    this.ourLocations = new OurLocations();
    this.header = new Header();
  }

  get epamTitle() { return cy.title(); }
  
  get urlEpamGlobal() { return 'https://epam.com'; }
  get urlEpamUA() { return 'https://careers.epam.ua'; }

  get policiesLinks() { return cy.get('.policies-links-wrapper .fat-links'); }

  open() { 
    cy.visit('https://www.epam.com/'); 
  }
  getCurrentTheme() {
    return cy.get('body').invoke('attr', 'class')
      .then((classValue) => { return classValue.includes('dark-mode') ? 'dark-mode' : 'light-mode'; });
  }
  crossOriginUA() {
    cy.origin('https://careers.epam.ua', () => {
      cy.on('uncaught:exception', (e) => {
        if (e.message.includes('Failed to set a named property \'onbeforeunload\' on \'Window\'')) {
          // Ignore the specific error related to the cross-origin issue
          return false;
        }
      });
    });
  }

}

module.exports = HomePage;