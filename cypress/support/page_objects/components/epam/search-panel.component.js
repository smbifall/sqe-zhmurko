class SearchPanel {

  get searchIcon() { 
    return cy.get('.search-icon'); 
  }
  get searchInputField() { 
    return cy.get('#new_form_search'); 
  }
  get searchButton() { 
    return cy.get('.search-results__action-section .custom-button'); 
  }

  search(input) {
    this.searchIcon.click();
    this.searchInputField.type(input);
    this.searchButton.click();
  }
}

module.exports = SearchPanel;