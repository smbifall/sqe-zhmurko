const Path = require('../../pages/e_shop/path');

const path = new Path();

class JewelryPage {

  get jewelryItem() { return cy.get(':nth-child(2) > .product-item > .details > .product-title > a'); }
  get barNotification() { return cy.get('#bar-notification .content'); }
  get addToWishlistBttn() { return cy.get('.add-to-wishlist-button'); }
  get wishlistQuantity() { return cy.get('.wishlist-qty'); }
  get addToCartBttn() { return cy.get('.add-to-cart-button'); }
  get cartQuantity() { return cy.get('.cart-qty'); }

  open() {
    cy.visit(path.jewelryPage);
  }
}

module.exports = JewelryPage;