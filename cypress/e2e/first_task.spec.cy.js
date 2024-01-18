const HomePage = require('../support/epam/homePage');
const Locations = require('../support/epam/locations');

describe('task 1', () => {
  const homePage = new HomePage();
  const location = new Locations();
  before(() => {
    homePage.crossOriginUA();
  });
  beforeEach(() => {
    homePage.open();
  });


  it('contains the correct title', () => {
    homePage.epamTitle.should('equal', 'EPAM | Software Engineering & Product Development Services');
  });


  it('switch light & dark mode', () => {
    const initialTheme = homePage.getCurrentTheme();
    homePage.changeTheme();
    const switchedTheme = homePage.getCurrentTheme();
    expect(switchedTheme).to.not.equal(initialTheme);
  });


  it('changes language to UA', () => {
    homePage.locationSelectionBttn.click();
    homePage.locationSelectorUA.click();
    cy.url('eq', location.urlEpamUA);
  });
  
});