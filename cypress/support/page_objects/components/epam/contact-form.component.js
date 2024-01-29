class ContactForm {

  get submitButton() { 
    return cy.get('.button-ui'); 
  }

  getRequiredFields() {
    return [
      { inputName: 'user_first_name', error: 'This is a required field' },
      { inputName: 'user_last_name', error: 'This is a required field' },
      { inputName: 'user_email', error: 'This is a required field' },
      { inputName: 'user_phone', error: 'This is a required field' },
      // { inputName: 'user_comment_how_hear_about', error: 'This is a required field' },
      // { inputName: 'gdprConsent', error: 'Please check this box if you want to proceed' },
    ];
  }
  submitContactForm() {
    this.submitButton.click();
  }

}

module.exports = ContactForm;