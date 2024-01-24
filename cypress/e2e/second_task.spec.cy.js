const HomePage = require('../support/po/pages/e_shop/homePage');
const RegisterPage = require('../support/po/pages/e_shop/registerPage');
const LoginPage = require('../support/po/pages/e_shop/loginPage');
const Path = require('../support/po/pages/e_shop/path');

const homePage = new HomePage();
const registerPage = new RegisterPage();
const loginPage = new LoginPage();
const path = new Path();

describe('task 2', () => {

  const regData = registerPage.generateRegData();

  beforeEach(() => { 
    homePage.open(); 
  });

  it('register a user', () => {
    homePage.registerBttn.click();

    cy.url().should('eq', path.registerPage);

    registerPage.fillRegForm(regData);
    registerPage.registerBttn.click();

    cy.url().should('eq', path.successRegistration);
    registerPage.registerResult.should('contain.text', 'Your registration completed');
  });

  it('login a user', () => {
    homePage.loginBttn.click();

    cy.url().should('eq', path.loginPage);

    loginPage.fillLoginForm(regData);
    loginPage.loginBttn.click();

    homePage.accountInfo.should('have.text', regData.email);
  });

});