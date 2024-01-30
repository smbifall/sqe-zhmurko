class Header {

  get registrationButton() { 
    return cy.get('.ico-register'); 
  }
  get loginButton() { 
    return cy.get('.ico-login'); 
  }
  get accountInfo() { 
    return cy.get('.header-links > ul > :nth-child(1) > .account'); 
  }
  get wishlist() { 
    return cy.get('.ico-wishlist > .cart-label'); 
  }
  get cart() { 
    return cy.get('.ico-cart > .cart-label'); 
  }

  openLoginPage() {
    this.loginButton.click();
  }
  openRegistrationPage() {
    this.registrationButton.click();
  }

}

module.exports = Header;