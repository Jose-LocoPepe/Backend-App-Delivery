'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Products', [
      {
        name: 'Manzana',
        description: 'unamanzanaroja',
        price:50,
        categoryid: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Banana',
        description: 'yellow',
        price:55,
        categoryid: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Patata',
        description: 'tecnicamenteesuntuberculonounaverdura',
        price:56,
        categoryid: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Helado',
        description: 'estafrio',
        price:500,
        categoryid: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
      
    ], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
