class Header {

  get locationSelectionButton() { 
    return cy.get('.location-selector__button'); 
  }
  // get locationSelectionUkraine() { 
  //   return cy.contains('.location-selector__list', 'Українська'); 
  // }
  get locationSelectionItem() { 
    return cy.get('.location-selector__panel .location-selector__list .location-selector__link'); 
  }
  get searchIcon() { 
    return cy.get('.search-icon'); 
  }

  changeTheme() { 
    cy.get('a.desktop-logo + section.theme-switcher-ui .switch').click();
  }
  changeLocation(location) {
    this.locationSelectionButton.click();
    this.locationSelectionItem.contains(location).click();
  }

}

module.exports = Header;