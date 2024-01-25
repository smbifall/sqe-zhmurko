class CartPage {

  get jewerlyItem() { return cy.get('.product > a'); }
  get removeFromCartCheckbox() { return cy.get('.remove-from-cart > input'); }
  get updateCartBttn() { return cy.get('.update-cart-button'); }
  get summaryContent() { return cy.get('.order-summary-content'); }
  get termsOfService() { return cy.get('#termsofservice'); }
  get checkoutBttn() { return cy.get('#checkout'); }

  cleanCart() {
    this.removeFromCartCheckbox.click();
    this.updateCartBttn.click();
  }
  agreeTermsOfService() {
    this.termsOfService.click();
  }
  checkout() {
    this.checkoutBttn.click();
  }
  
}

module.exports = CartPage;