class Header {

  //
  get locationSelectionBttn() { return cy.get('.location-selector__button'); }
  get locationSelectionUA() { return cy.contains('.location-selector__list', 'Українська'); }

  changeTheme() { 
    cy.get('a.desktop-logo + section.theme-switcher-ui .switch').click();
  }

}

module.exports = Header;