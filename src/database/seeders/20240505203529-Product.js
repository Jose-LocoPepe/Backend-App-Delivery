'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', [
      { name: 'Apple', description: 'Fresh red apples', price: 1200, categoryid: 1, isActive: true, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Banana', description: 'Ripe yellow bananas', price: 900, categoryid: 2, isActive: true, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Cherry', description: 'Sweet red cherries', price: 1500, categoryid: 3, isActive: true, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Grapes', description: 'Juicy green grapes', price: 2000, categoryid: 4, isActive: true, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Mango', description: 'Delicious summer mangoes', price: 2500, categoryid: 5, isActive: true, createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});
  }
};
