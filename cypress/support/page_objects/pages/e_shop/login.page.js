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

  loginUser(data) {
    if (data.email) {
      this.email.type(data.email);
    }
    if (data.password) {
      this.password.type(data.password);
    }
    cy.intercept('POST', 'https://demowebshop.tricentis.com/login')
      .as('login');
    this.loginButton.click();
  }

}

module.exports = LoginPage;