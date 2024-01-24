class WishlistPage {
  
  get wishlistProduct() { return cy.get('.product > a'); }

}

module.exports = WishlistPage;