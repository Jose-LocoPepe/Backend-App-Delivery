'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Productimages', [
      {
        image: 'Manzana.jpg',
        productid: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        image: 'Manzana2.jpg',
        productid: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        image: 'Banana.jpg',
        productid: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        image: 'Manzana3.jpg',
        productid: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        image: 'Patata.jpg',
        productid: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        image: 'Patata5.jpg',
        productid: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        image: 'Helado1.jpg',
        productid: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Productimages', null, {});
  }
};
