const Path = require('./path');

const path = new Path;

class DesktopsPage {

  get sortByDropdown() { return cy.get('#products-orderby'); }
  get showPerPageDropdown() { return cy.get('#products-pagesize'); }
  get productItems() { return cy.get('.product-grid .product-item'); }
  get productNames() { return cy.get('.product-grid .product-item .product-title'); }
  get productPrices() { return cy.get('.product-grid .product-item .actual-price'); }


  open() {
    cy.visit(path.desktopsPage);
  }
  selectSortingOption(option) {
    this.sortByDropdown.select(option);
  }
  selectItemsPerPage(option) {
    this.showPerPageDropdown.select(option);
  }
}

module.exports = DesktopsPage;