class TopMenu {

  get computersCategory() {
    return cy.get('.top-menu').contains('Computers'); 
  }

  getComputersCategoryNames() {
    return [
      'Desktops',
      'Notebooks',
      'Accessories',
    ];
  }
  getComputersCategorySelectors() {
    return [
      '.top-menu > :nth-child(2) > .sublist > :nth-child(1) > a',
      '.top-menu > :nth-child(2) > .sublist > :nth-child(2) > a',
      '.top-menu > :nth-child(2) > .sublist > :nth-child(3) > a',
    ];
  }
  hoverOverComputersCategory() {
    this.computersCategory.trigger('mouseover');
  }

}
module.exports = TopMenu;