'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ProductImages', [
      { image: 'apple.jpg', productId: 1, createdAt: new Date(), updatedAt: new Date() },
      { image: 'banana.jpg', productId: 2, createdAt: new Date(), updatedAt: new Date() },
      { image: 'carrot.jpg', productId: 3, createdAt: new Date(), updatedAt: new Date() },
      { image: 'bread.jpg', productId: 4, createdAt: new Date(), updatedAt: new Date() },
      { image: 'milk.jpg', productId: 5, createdAt: new Date(), updatedAt: new Date() },
      { image: 'cheese.jpg', productId: 6, createdAt: new Date(), updatedAt: new Date() },
      { image: 'chicken_breast.jpg', productId: 7, createdAt: new Date(), updatedAt: new Date() },
      { image: 'salmon.jpg', productId: 8, createdAt: new Date(), updatedAt: new Date() },
      { image: 'eggs.jpg', productId: 9, createdAt: new Date(), updatedAt: new Date() },
      { image: 'lettuce.jpg', productId: 10, createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ProductImages', null, {});
  }
};