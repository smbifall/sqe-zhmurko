const { faker } = require('@faker-js/faker');

class RequestData {
  generateUserData() {
    const id = 1;
    const username = faker.internet.userName();
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const email = faker.internet.email();
    const password = faker.internet.password();
    const phone = faker.phone.number();
    const userStatus = 200;

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
}

module.exports = RequestData;