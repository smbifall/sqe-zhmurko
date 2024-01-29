const OurLocations = require("../../components/epam/our-locations.component");
const Header = require("../../components/epam/header.component");

class HomePage {

  constructor() {
    this.header = new Header();
    this.ourLocations = new OurLocations();
  }

  get epamTitle() {
    return cy.title(); 
  }
  get epamLogo() { 
    return cy.get('.desktop-logo > .header__logo-light'); 
  }
  get epamPoliciesLinks() { 
    return cy.get('.policies-links-wrapper .fat-links'); 
  }

  getCurrentTheme() {
    return cy.get('body').invoke('attr', 'class')
      .then((classValue) => { return classValue.includes('dark-mode') ? 'dark-mode' : 'light-mode'; });
  }
  
}

module.exports = HomePage;