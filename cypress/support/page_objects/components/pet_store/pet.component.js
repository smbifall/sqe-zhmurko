class Pet {

  get petUrl() { return 'https://petstore.swagger.io/v2/pet'; }

  generatePetData() {
    return {
      id: 123,
      name: 'Fluffy',
      category: {
        id: 1,
        name: 'Dogs',
      },
      photoUrls: ['https://example.com/fluffy.jpg'],
      tags: [
        {
          id: 1,
          name: 'Cute',
        },
      ],
      status: 'available',
    };
  }

}

module.exports = Pet;