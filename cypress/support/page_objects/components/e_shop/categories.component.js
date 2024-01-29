class Categories {

  get computersGroup() {return cy.get('.top-menu').contains('Computers'); }

  getComputersGroupNames() {
    return [
      'Desktops',
      'Notebooks',
      'Accessories',
    ];
  }
  getComputersGroupSelectors() {
    return [
      '.top-menu > :nth-child(2) > .sublist > :nth-child(1) > a',
      '.top-menu > :nth-child(2) > .sublist > :nth-child(2) > a',
      '.top-menu > :nth-child(2) > .sublist > :nth-child(3) > a',
    ];
  }
  hoverOverComputers() {
    this.computersGroup.trigger('mouseover');
  }

}
module.exports = Categories;