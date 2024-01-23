const { faker } = require('@faker-js/faker');

class User {

  get loginUrl() { return 'https://petstore.swagger.io/v2/user/login'; }
  get registrationUrl() { return 'https://petstore.swagger.io/v2/user'; }
  get usersListUrl() { return 'https://petstore.swagger.io/v2/user/createWithArray'; }
  get logoutUrl() { return 'https://petstore.swagger.io/v2/user/logout'; }

  generateRegistrationData() {
    const id = Math.floor(Math.random() * 10000);
    const username = faker.internet.userName();
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const email = faker.internet.email();
    const password = faker.internet.password();
    const phone = faker.phone.number();
    const userStatus = Math.floor(Math.random() * 10000);

    return {
      id,
      username,
      firstName,
      lastName,
      email,
      password,
      phone,
      userStatus,
    };
  }
  getLoginData() {
    const username = faker.internet.userName();
    const password = faker.internet.password();

    return {
      username,
      password,
    };
  }

}

module.exports = User;