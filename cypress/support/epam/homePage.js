class HomePage {

  // Patches
  crossOriginUA() {
    cy.origin('https://careers.epam.ua', () => {
      cy.on('uncaught:exception', (e) => {
        if (e.message.includes('Failed to set a named property \'onbeforeunload\' on \'Window\'')) {
          // Ignore the specific error related to the cross-origin issue
          return false;
        }
      });
    });
  }

  // Elements
  get epamTitle() { return cy.title(); }
  get locationSelectionBttn() { return cy.get('.location-selector__button'); }
  get locationSelectorUA() { return cy.get('.location-selector__list')
    .contains('Українська')
    .parent('.location-selector__item'); 
  }

  // Methods
  open() { 
    cy.visit('https://www.epam.com/'); 
  }
  changeTheme() { 
    cy.get('.theme-switcher')
      .click();
  }
  getCurrentTheme() {
    return cy.get('body')
      .invoke('attr', 'class')
      .then((classValue) => {
        return classValue.includes('dark-mode') ? 'dark-mode' : 'light-mode';
      });
  }
}

module.exports = HomePage;