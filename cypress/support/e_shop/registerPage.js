class RegisterPage {

  // Inputs
  get firstName() { return cy.get('#FirstName'); }
  get lastName() { return cy.get('#LastName'); }
  get email() { return cy.get('#Email'); }
  get password() { return cy.get('#Password'); }
  get confirmPassword() { return cy.get('#ConfirmPassword'); }

  // Buttons
  get registerBttn() { return cy.get('#register-button'); }

  // Methods
  open() { 
    cy.visit('https://demowebshop.tricentis.com/register');
  }
  fillRegForm(params) {

    if (params.gender === 'male') {
      cy.get('#gender-male').check();
    }
    if (params.gender === 'female') {
      cy.get('#gender-female').check();
    }
    if (params.firstName) {
      this.firstName.type(params.firstName);
    }
    if (params.lastName) {
      this.lastName.type(params.lastName);
    }
    if (params.email) {
      this.email.type(params.email);
    }
    if (params.password) {
      this.password.type(params.password);
    }
    if (params.confirmPassword) {
      this.confirmPassword.type(params.confirmPassword);
    }
  }

}

module.exports = RegisterPage;