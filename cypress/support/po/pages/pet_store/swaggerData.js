const User = require('../../components/pet_store/user');
const Pet = require('../../components/pet_store/pet');

class swaggerData {
  constructor() {
    this.user = new User();
    this.pet = new Pet();
  }

  get baseUrl() { return 'https://petstore.swagger.io/v2'; }
  
}

module.exports = swaggerData;