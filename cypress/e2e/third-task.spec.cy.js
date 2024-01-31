const SwaggerData = require('../support/swagger/swagger.data');

const swaggerData = new SwaggerData();

describe('Task #3', () => {

  const registrationData = swaggerData.user.generateRegistrationData();

  it('Create a new user', () => {
    cy.request(
      {
        method: 'POST',
        url: swaggerData.user.registrationUrl,
        body: registrationData,
      })
      .then((response) => { expect(response.status).to.equal(200); });
  });

  it('login', () => {
    const loginData = swaggerData.user.getLoginData();

    cy.request(
      {
        method: 'GET',
        url: swaggerData.user.loginUrl,
        body: loginData,
      })
      .then((response) => { expect(response.status).to.eq(200); });
  });

  it('create a list of users', () => {
    const usersArray = [
      swaggerData.user.generateRegistrationData(),
      swaggerData.user.generateRegistrationData(),
    ];

    cy.request(
      {
        method: 'POST',
        url: swaggerData.user.usersListUrl,
        body: usersArray,
      })
      .then((response) => { expect(response.status).to.eq(200); });
  });

  it('user logout', () => {
    cy.request(
      {
        method: 'GET',
        url: swaggerData.user.logoutUrl,
      })
      .then((response) => { expect(response.status).to.eq(200); });
  });

  it('add a new pet', () => {
    cy.request(
      {
        method: 'POST',
        url: swaggerData.pet.petUrl,
        body: swaggerData.pet.generatePetData(),
      })
      .then((response) => { expect(response.status).to.eq(200); });
  });

  it('update pet image', () => {
    const petId = 123;
    const petImage = ['https://example.com/fluffy.jpg'];

    const formData = new FormData();
    formData.append('file', petImage[0]);

    cy.request({
      method: 'POST',
      url: `${swaggerData.pet.petUrl}/${petId}/uploadImage`,
      body: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }).then((response) => { expect(response.status).to.eq(200); });
  });

  it('update Pet`s name and status', () => {
    const petId = 123;
    const updatedData = {
      name: 'Pluppy',
      status: 'sold out',
    };

    cy.request(
      {
        method: 'POST',
        url: `${swaggerData.pet.petUrl}/${petId}`,
        form: true,
        body: {
          name: updatedData.name,
          status: updatedData.status,
        },
      })
      .then((response) => {
        expect(response.status).to.eq(200);
      });
  });

  it('delete a pet', () => {
    const petId = 123;
    const deleteData = {
      apiKey: 'apiKey',
      petId: petId,
    };

    cy.request(
      {
        method: 'DELETE',
        url: `${swaggerData.pet.petUrl}/${petId}`,
        body: deleteData,
      })
      .then((response) => { expect(response.status).to.eq(200); });
  });

});