/// <reference types='Cypress' />
const { faker } = require('@faker-js/faker');
const HomePage = require('../support/e_shop/homePage');
const RegisterPage = require('../support/e_shop/registerPage');
const Locations = require('../support/e_shop/locations');

describe('task 2', () => {
  const homePage = new HomePage();
  const registerPage = new RegisterPage();
  const location = new Locations();

  // Reg form data
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

  beforeEach(() => { homePage.open(); });

  it('register a user', () => {

    homePage.registerButton.click();

    cy.url().should('eq', location.registerPage);

    registerPage.fillRegForm({
      gender: gender,
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    });

    registerPage.registerBttn.click();

  });

});