const RequestData = require('../support/swagger/requestData');

describe('task 3', () => {
  const data = new RequestData();
  const userData = data.generateUserData();

  it('create new user', () => {
    cy.request(
      'POST',
      'https://petstore.swagger.io/v2/user',
      userData)
      .then((response) => {
        expect(response.status).to.equal(200);
      });
  });
});