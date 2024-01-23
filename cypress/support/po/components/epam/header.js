class Header {

  get locationSelectionBttn() { return cy.get('.location-selector__button'); }
  get locationSelectionUA() { return cy.contains('.location-selector__list', 'Українська'); }

  get searchIcon() { return cy.get('.search-icon'); }
  get searchInput() { return cy.get('#new_form_search'); }
  get searchBttn() { return cy.get('.search-results__action-section .custom-button'); }

  changeTheme() { 
    cy.get('a.desktop-logo + section.theme-switcher-ui .switch').click();
  }

}

module.exports = Header;