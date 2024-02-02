class LoginPage {

  get email() { 
    return cy.get('#Email'); 
  }
  get password() { 
    return cy.get('#Password'); 
  }
  get loginButton() { 
    return cy.get('form > .buttons > .button-1'); 
  }

  loginUser() {
    cy.fixture('login.json').as('userData');
    cy.get('@userData').then((data) => {
      this.email.type(data.email);
      this.password.type(data.password);
    });
    cy.intercept('POST', 'https://demowebshop.tricentis.com/login')
      .as('login');
    this.loginButton.click();

    return cy.get('@userData').its('email');
  }

}

module.exports = LoginPage;