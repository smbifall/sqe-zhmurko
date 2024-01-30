class CartPage {

  get jewelryItem() { 
    return cy.get('.product > a'); 
  }
  get removeFromCartCheckbox() { 
    return cy.get('td.remove-from-cart input[type="checkbox"]');
  }
  get updateCartButton() { 
    return cy.get('.update-cart-button'); 
  }
  get summaryContent() { 
    return cy.get('.order-summary-content'); 
  }
  get termsOfService() { 
    return cy.get('#termsofservice'); 
  }
  get checkoutButton() { 
    return cy.get('#checkout'); 
  }

  cleanCart() {
    this.removeFromCartCheckbox.click();
    this.updateCartButton.click();
  }
  checkout() {
    this.termsOfService.click();
    this.checkoutButton.click();
  }
  
}

module.exports = CartPage;