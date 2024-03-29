const homePage = new (require('../support/page_objects/pages/epam/home.page'))();
const searchPage = new (require('../support/page_objects/pages/epam/search.page'))();
const searchPanel = new (require('../support/page_objects/components/epam/search-panel.component'))();
const contactPage = new (require('../support/page_objects/pages/epam/contact.page'))();
const route = new (require('../support/route'))();

describe('Task 1 (Epam Web)', () => {

  let epamData;

  before(() => {
    cy.fixture('epamHome.json').then(data => {
      epamData = data;
    });
  });

  beforeEach(() => {
    route.openEpamGlobal();
  });

  it('Verify the correct title', () => {
    homePage.epamTitle.should('equal', epamData.epamTitle);
  });

  it('Verify switch between light & dark mode', () => {
    const initialTheme = homePage.getCurrentTheme();
    homePage.header.changeTheme();
    const switchedTheme = homePage.getCurrentTheme();
    expect(switchedTheme).to.not.equal(initialTheme);
  });

  it('Verify changing language to UA', () => {
    homePage.header.changeLocation('Україна');
    cy.url('eq', route.epamUkraine);
  });

  it('Verify the policies list', () => {
    homePage.epamPoliciesLinks.each(($link, index) => {
      cy.wrap($link).should('contain.text', epamData.policiesItems[index]);
    });
  });

  it('Verify switching list of locations on the home page', () => {
    homePage.ourLocations.locationsSection
      .scrollIntoView()
      .should('be.visible');
    homePage.ourLocations.locationsAmericas
      .should('be.visible')
      .invoke('attr', 'class')
      .should('include', 'active');
    homePage.ourLocations.locationsEmea
      .click()
      .invoke('attr', 'class')
      .should('include', 'active');
    homePage.ourLocations.locationsApac
      .click()
      .invoke('attr', 'class')
      .should('include', 'active');
  });

  it('Verify the search function', () => {
    searchPanel.search('AI');
    searchPage.searchResultList.should('be.visible');
    searchPage.searchResultItem.should('have.length.greaterThan', 0);
  });

  it('Verify the required fields on the contact form', () => {
    const requiredFields = contactPage.contactForm.getRequiredFields();

    route.openContactPage();
    contactPage.contactForm.submitContactForm();
    requiredFields.forEach(field => {
      const fieldSelector = `[name="${field.inputName}"]`;

      cy.get(fieldSelector)
        .should('have.attr', 'aria-required', 'true');
      cy.get(`${fieldSelector} + .validation-tooltip .validation-text`)
        .should('have.text', field.error);
    });
  });

  it('Verify the company logo on the header leads to the main page', () => {
    route.openContactPage();
    homePage.epamLogo.click();
    cy.url().should('eq', route.epamGlobal);
  });

});