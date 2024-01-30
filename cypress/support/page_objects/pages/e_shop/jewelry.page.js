class JewelryPage {

  get jewelryItem() { 
    return cy.get(':nth-child(2) > .product-item > .details > .product-title > a'); 
  }
  get barNotification() { 
    return cy.get('#bar-notification .content'); 
  }
  get addToWishlistButton() { return cy.get('.add-to-wishlist-button'); 
  }
  get wishlistQuantity() { 
    return cy.get('.wishlist-qty'); 
  }
  get addToCartButton() { 
    return cy.get('.add-to-cart-button'); 
  }
  get cartQuantity() { 
    return cy.get('.cart-qty'); 
  }

  addItemToWishlist() {
    this.jewelryItem.click();
    this.addToWishlistButton.click();
  }
  addItemToCart() {
    this.jewelryItem.click();
    this.addToCartButton.click();
  }

}

module.exports = JewelryPage;