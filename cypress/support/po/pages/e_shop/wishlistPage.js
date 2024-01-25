class WishlistPage {
  
  get wishlistItem() { return cy.get('.product > a'); }

}

module.exports = WishlistPage;