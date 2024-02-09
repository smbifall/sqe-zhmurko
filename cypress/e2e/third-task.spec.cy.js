const swaggerData = new (require('../support/swagger/swagger.data'))();

describe('Task #3', () => {

  it('Create a new user', () => {
    cy.request(
      {
        method: 'POST',
        url: swaggerData.user.registrationUrl,
        body: swaggerData.user.generateRegistrationData(),
      })
      .then((response) => { expect(response.status).to.eq(200); });
  });

  it('Login with valid credentials', () => {
    cy.request(
      {
        method: 'GET',
        url: swaggerData.user.loginUrl,
        body: swaggerData.user.getLoginData(),
      })
      .then((response) => { expect(response.status).to.eq(200); });
  });

  it('Create a list of users', () => {
    cy.request(
      {
        method: 'POST',
        url: swaggerData.user.usersListUrl,
        body: [
          swaggerData.user.generateRegistrationData(),
          swaggerData.user.generateRegistrationData(),
        ],
      })
      .then((response) => { expect(response.status).to.eq(200); });
  });

  it('User logout', () => {
    cy.request(
      {
        method: 'GET',
        url: swaggerData.user.logoutUrl,
      })
      .then((response) => { expect(response.status).to.eq(200); });
  });

  it('Add a new pet', () => {
    cy.request(
      {
        method: 'POST',
        url: swaggerData.pet.petUrl,
        body: swaggerData.pet.generatePetData(),
      })
      .then((response) => { expect(response.status).to.eq(200); });
  });

  it('Update Pet`s image', () => {
    const petId = 123;
    const petImageUrl = 'https://example.com/fluffy.jpg';

    const formData = new FormData();
    formData.append('file', petImageUrl);

    cy.request({
      method: 'POST',
      url: `${swaggerData.pet.petUrl}/${petId}/uploadImage`,
      body: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }).then((response) => { expect(response.status).to.eq(200); });
  });

  it('Update Pet`s name and status', () => {
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

  it('Delete a pet', () => {
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