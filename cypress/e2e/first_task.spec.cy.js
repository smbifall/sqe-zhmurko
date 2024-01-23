const HomePage = require('../support/po/pages/epam/homePage');
const SearchPage = require('../support/po/pages/epam/searchPage');

const homePage = new HomePage();
const searchPage = new SearchPage();

describe('task 1', () => {
  
  // before(() => {
  //   homePage.crossOriginUA();
  // });

  beforeEach(() => {
    homePage.open();
  });

  it('verify the correct title', () => {
    homePage.epamTitle.should('equal', 'EPAM | Software Engineering & Product Development Services');
  });

  it('switch between light & dark mode', () => {
    const initialTheme = homePage.getCurrentTheme();
    homePage.header.changeTheme();
    const switchedTheme = homePage.getCurrentTheme();
    expect(switchedTheme).to.not.equal(initialTheme);
  });

  it('change language to UA', () => {
    homePage.header.locationSelectionBttn.click();
    homePage.header.locationSelectionUA.click();
    cy.url('eq', homePage.urlEpamUA);
  });

  it('check the policies list', () => {
    cy.scrollTo('bottom');
    const expectedTexts = 
      [
        'INVESTORS',
        'OPEN SOURCE',
        'PRIVACY POLICY',
        'COOKIE POLICY',
        'APPLICANT PRIVACY NOTICE',
        'WEB ACCESSIBILITY',
      ];
    homePage.policiesLinks.each(($link, index) => {
      cy.wrap($link).should('contain.text', expectedTexts[index]);
    });
  });

  it('switch location list by region', () => {
    homePage.ourLocations.locationsSection
      .scrollIntoView()
      .should('be.visible');

    homePage.ourLocations.locationsAmericas
      .should('be.visible')
      .invoke('attr', 'class')
      .should('include', 'active');
    homePage.ourLocations.locationsEmea
      .invoke('attr', 'class')
      .should('not.include', 'active');
    homePage.ourLocations.locationsApac
      .invoke('attr', 'class')
      .should('not.include', 'active');

    homePage.ourLocations.locationsEmea
      .click()
      .invoke('attr', 'class')
      .should('include', 'active');
    homePage.ourLocations.locationsAmericas
      .invoke('attr', 'class')
      .should('not.include', 'active');
    homePage.ourLocations.locationsApac
      .invoke('attr', 'class')
      .should('not.include', 'active');

    homePage.ourLocations.locationsApac
      .click()
      .invoke('attr', 'class')
      .should('include', 'active');
    homePage.ourLocations.locationsEmea
      .invoke('attr', 'class')
      .should('not.include', 'active');
    homePage.ourLocations.locationsAmericas
      .invoke('attr', 'class')
      .should('not.include', 'active');
  });

  it('check the search function', () => {
    homePage.header.searchIcon.click();
    homePage.header.searchInput.type('AI');
    homePage.header.searchBttn.click();
    searchPage.searchResult.should('be.visible');
    searchPage.searchResultItem.should('have.length.greaterThan', 0);
  });

});
