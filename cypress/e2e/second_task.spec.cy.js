const HomePage = require('../support/po/pages/e_shop/homePage');
const RegisterPage = require('../support/po/pages/e_shop/registerPage');
const Path = require('../support/po/pages/e_shop/path');

const homePage = new HomePage();
const registerPage = new RegisterPage();
const path = new Path();

describe('task 2', () => {

  const RegData = registerPage.generateRegData();

  beforeEach(() => { 
    homePage.open(); 
  });

  it('register a user', () => {

    homePage.registerBttn.click();

    cy.url().should('eq', path.registerPage);

    registerPage.fillRegForm(RegData);
    // registerPage.fillRegForm({
    //   gender: gender,
    //   firstName: firstName,
    //   lastName: lastName,
    //   email: email,
    //   password: password,
    //   confirmPassword: confirmPassword,
    // });

    registerPage.registerBttn.click();

  });

});