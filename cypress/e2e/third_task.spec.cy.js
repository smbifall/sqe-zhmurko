const SwaggerData = require('../support/po/pages/pet_store/swaggerData');

const swaggerData = new SwaggerData();

describe('task 3', () => {
  const registrationData = swaggerData.user.generateRegistrationData();

  it('create new user', () => {
    cy.request(
      'POST',
      swaggerData.user.registrationUrl,
      registrationData)
      .then((response) => {
        expect(response.status).to.equal(200);
      });
  });

  it('login', () => {
    const loginData = swaggerData.user.getLoginData();

    cy.request(
      'GET',
      swaggerData.user.loginUrl,
      loginData)
      .then((response) => {
        expect(response.status).to.eq(200);
      });
  });

  it('create a list of users', () => {
    const usersArray = [
      swaggerData.user.generateRegistrationData(),
      swaggerData.user.generateRegistrationData(),
    ];

    cy.request(
      'POST',
      swaggerData.user.usersListUrl,
      usersArray)
      .then((response) => {
        expect(response.status).to.eq(200);
      });
  });

  it('user logout', () => {
    cy.request(
      'GET',
      swaggerData.user.logoutUrl)
      .then((response) => {
        expect(response.status).to.eq(200);
      });
  });

  it('add a new pet', () => {
    cy.request(
      'POST',
      swaggerData.pet.addPetUrl,
      swaggerData.pet.generatePetData())
      .then((response) => {
        expect(response.status).to.eq(200);
      });
  });

  // it('update pet image', () => {
  //   const imageData = { file: ['https://example.com/new-image.jpg'] };
  //   const petId = `/${Math.floor(Math.random() * 100)}`;

  //   cy.request(
  //     'PUT',
  //     `${swaggerData.pet.addPetUrl}${petId}/uploadImage`,
  //     imageData)
  //     .then((response) => {
  //       expect(response.status).to.eq(200);
  //     });
  // });

  // it('update Pet’s name and status', () => {
  //   const petId = '/1';
  //   const updatedData = {
  //     name: 'Pluppy',
  //     status: 'sold out',
  //   };

  //   cy.request(
  //     'POST',
  //     `${swaggerData.pet.addPetUrl}${petId}`,
  //     updatedData)
  //     .then((response) => {
  //       expect(response.status).to.eq(201);
  //     });
  // });

  it('delete a pet', () => {
    const petId = '/1';
    const deleteData = {
      apiKey: 'abc',
      petId: petId,
    };

    cy.request(
      'DELETE',
      `${swaggerData.pet.addPetUrl}${petId}`,
      deleteData)
      .then((response) => {
        expect(response.status).to.eq(200);
      });
  });

});