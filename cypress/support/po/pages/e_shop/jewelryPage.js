const Path = require('../../pages/e_shop/path');

const path = new Path();

class JewelryPage {

  get wishlistItem() { return cy.get(':nth-child(2) > .product-item > .details > .product-title > a'); }
  get addToWishlistBttn() { return cy.get('.add-to-wishlist-button'); }
  get barNotification() { return cy.get('#bar-notification .content'); }
  get wishlistQuantity() { return cy.get('.wishlist-qty'); }
  get wishlistIcon() { return cy.get('.ico-wishlist > .cart-label'); }

  open() {
    cy.visit(path.jewelryPage);
  }
}

module.exports = JewelryPage;