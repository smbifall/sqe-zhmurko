const { faker } = require('@faker-js/faker');
class RegistrationPage {

  get firstName() { 
    return cy.get('#FirstName'); 
  }
  get lastName() { 
    return cy.get('#LastName'); 
  }
  get email() { 
    return cy.get('#Email'); 
  }
  get password() { 
    return cy.get('#Password'); 
  }
  get confirmPassword() { 
    return cy.get('#ConfirmPassword'); 
  }
  get registerButton() { 
    return cy.get('#register-button'); 
  }
  get registerResult() { 
    return cy.contains('.result', 'Your registration completed');
  }

  fillRegistrationForm(params) {

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
  generateRegistrationData() {
    const randomGender = () => {
      const genders = ['male', 'female'];
      const randomIndex = Math.floor(Math.random() * genders.length);
      return genders[randomIndex];
    };
    const gender = randomGender();
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const email = faker.internet.email();
    const password = faker.internet.password();
    const confirmPassword = password;

    return {
      gender,
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    };
  }
  registerUser() {
    const regData = this.generateRegistrationData();
    
    this.fillRegistrationForm(regData);
    cy.intercept('POST', 'https://demowebshop.tricentis.com/register')
      .as('registration');
    this.registerButton.click();
  }

}

module.exports = RegistrationPage;