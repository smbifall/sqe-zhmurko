const Path = require('./path');

const path = new Path;

class DesktopsPage {

  get sortByDropdown() { return cy.get('#products-orderby');}
  get productNames() { return cy.get('.product-grid .product-item .product-title');}

  open() {
    cy.visit(path.desktopsPage);
  }
  selectSortingOption(option) {
    this.sortByDropdown.select(option);
  }
}

module.exports = DesktopsPage;