class LoginPage {

  get email() { return cy.get('#Email'); }
  get password() { return cy.get('#Password'); }
  get loginBttn() { return cy.get('form > .buttons > .button-1'); }

  fillLoginForm(params) {
    if (params.email) {
      this.email.type(params.email);
    }
    if (params.password) {
      this.password.type(params.password);
    }
  }

}

module.exports = LoginPage;