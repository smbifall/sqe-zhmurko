class Header {

  get locationSelectionButton() { 
    return cy.get('.location-selector__button'); 
  }
  get locationSelectionUkraine() { 
    return cy.contains('.location-selector__list', 'Українська'); 
  }
  get searchIcon() { 
    return cy.get('.search-icon'); 
  }
  get searchInputField() { 
    return cy.get('#new_form_search'); 
  }
  get searchButton() { 
    return cy.get('.search-results__action-section .custom-button'); 
  }

  changeTheme() { 
    cy.get('a.desktop-logo + section.theme-switcher-ui .switch').click();
  }
  openLocationSelectionMenu() {
    this.locationSelectionButton.click();
  }
  openSearchPanel() {
    this.searchIcon.click();
    this.searchInputField.should('be.visible');
  }

}

module.exports = Header;