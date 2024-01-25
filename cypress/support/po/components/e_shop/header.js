class Header {

  get registerBttn() { return cy.get('.ico-register'); }
  get loginBttn() { return cy.get('.ico-login'); }
  get accountInfo() { return cy.get('.header-links > ul > :nth-child(1) > .account'); }
  get wishlist() { return cy.get('.ico-wishlist > .cart-label'); }
  get cart() { return cy.get('.ico-cart > .cart-label'); }

  openLogin() {
    this.loginBttn.click();
  }
  openRegistration() {
    this.registerBttn.click();
  }
  openCart() {
    this.cart.click();
  }
  openWishlist() {
    this.wishlist.click();
  }

}

module.exports = Header;