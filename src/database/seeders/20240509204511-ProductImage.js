'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ProductImages', [
      { image: 'apple.jpg', productId: 1, createdAt: new Date(), updatedAt: new Date() },
      { image: 'banana.jpg', productId: 1, createdAt: new Date(), updatedAt: new Date() },
      { image: 'cherry.jpg', productId: 1, createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ProductImages', null, {});
  }
};