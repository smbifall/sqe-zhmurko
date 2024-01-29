class Route {

  get epamGlobal() { 
    return 'https://www.epam.com/'; 
  }
  get epamUkraine() { 
    return 'https://careers.epam.ua'; 
  }
  get contactPage() {
    return 'https://www.epam.com/about/who-we-are/contact';
  }

  openEpamGlobal() { 
    cy.visit(this.epamGlobal);
  }
  openContactPage() {
    cy.visit(this.contactPage);
  }

}

module.exports = Route;