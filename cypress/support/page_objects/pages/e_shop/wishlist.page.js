class WishlistPage {
  get removeItemCheckbox() { 
    return cy.get('td.remove-from-cart input[type="checkbox"]');
  }
  get updateWishlistButton() {
    return cy.get('.update-wishlist-button'); 
  }

  clearWishlist() {
    this.removeItemCheckbox.click();
    cy.intercept('POST', 'https://demowebshop.tricentis.com/wishlist')
      .as('clearWishlist');
    this.updateWishlistButton.click();
  }
}

module.exports = WishlistPage;