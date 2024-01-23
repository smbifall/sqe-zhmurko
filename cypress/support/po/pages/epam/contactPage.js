const ContactForm = require("../../components/epam/contactForm");

class ContactPage {
  constructor() {
    this.contactForm = new ContactForm();
  }

  open() {
    cy.visit('https://www.epam.com/about/who-we-are/contact');
  }
}

module.exports = ContactPage;