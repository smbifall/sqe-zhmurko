class Route {

  // TASK #1: EPAM
  get epamGlobal() { 
    return 'https://www.epam.com/'; 
  }
  get epamUkraine() { 
    return 'https://careers.epam.ua'; 
  }
  get contactPage() {
    return 'https://www.epam.com/about/who-we-are/contact';
  }

  openEpamGlobal() { 
    cy.visit(this.epamGlobal);
  }
  openContactPage() {
    cy.visit(this.contactPage);
  }

  // TASK #2: E-SHOP
  get homePage() { 
    return 'https://demowebshop.tricentis.com/'; 
  }
  get registrationPage() { 
    return 'https://demowebshop.tricentis.com/register'; 
  }
  get loginPage() { 
    return 'https://demowebshop.tricentis.com/login'; 
  }
  get desktopsPage() { 
    return 'https://demowebshop.tricentis.com/desktops'; 
  }
  get jewelryPage() { 
    return 'https://demowebshop.tricentis.com/jewelry'; 
  }
  get cartPage() {
    return 'https://demowebshop.tricentis.com/cart';
  }
  get checkoutPage() { 
    return 'https://demowebshop.tricentis.com/onepagecheckout'; 
  }

  openHomePage() {
    cy.visit(this.homePage);
  }
  openRegistrationPage() {
    cy.visit(this.registrationPage);
  }
  openLoginPage() {
    cy.visit(this.loginPage);
  }
  openDesktopsPage() {
    cy.visit(this.desktopsPage);
  }
  openJewelryPage() {
    cy.visit(this.jewelryPage);
  }
  openCartPage() {
    cy.visit(this.cartPage);
  }
  openCheckoutPage() {
    cy.visit(this.checkoutPage);
  }
}

module.exports = Route;