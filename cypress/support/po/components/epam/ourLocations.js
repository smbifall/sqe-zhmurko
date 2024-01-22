class OurLocations {

  get locationsSection() { return cy.contains('span .museo-sans-light', 'Our Locations'); }
  get locationsAmericas() { return cy.contains('.js-tabs-link', 'AMERICAS'); }
  get locationsEmea() { return cy.contains('.js-tabs-link', 'EMEA'); }
  get locationsApac() { return cy.contains('.js-tabs-link', 'APAC'); }
  
}

module.exports = OurLocations;