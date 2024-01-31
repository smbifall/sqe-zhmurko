const User = require('./user.data');
const Pet = require('./pet.data');

class swaggerData {
  constructor() {
    this.user = new User();
    this.pet = new Pet();
  }

  get baseUrl() { 
    return 'https://petstore.swagger.io/v2'; 
  }
  
}

module.exports = swaggerData;