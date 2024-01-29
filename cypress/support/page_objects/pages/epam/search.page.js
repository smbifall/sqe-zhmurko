class SearchPage {

  get searchResultList() { 
    return cy.get('.search-results__items');
  }
  get searchResultItem() { 
    return cy.get('.search-results__item');
  }

}

module.exports = SearchPage;