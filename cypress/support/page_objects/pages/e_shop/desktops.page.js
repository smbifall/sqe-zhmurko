class DesktopsPage {

  get sortByDropdown() { 
    return cy.get('#products-orderby'); 
  }
  get showPerPageDropdown() { 
    return cy.get('#products-pagesize'); 
  }
  get product() { 
    return cy.get('.product-grid .product-item'); 
  }
  get productName() { 
    return cy.get('.product-grid .product-item .product-title'); 
  }
  get productPrice() { 
    return cy.get('.product-grid .product-item .actual-price'); 
  }

  selectSortingOption(option) {
    this.sortByDropdown.select(option);
  }
  selectItemsPerPage(option) {
    this.showPerPageDropdown.select(option);
  }
}

module.exports = DesktopsPage;