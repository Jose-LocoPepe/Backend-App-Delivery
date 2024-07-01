'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('OrderDetails', [
      {
        orderId: 1,
        productId: 1,
        quantity: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        orderId: 1,
        productId: 1,
        quantity: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        orderId: 2,
        productId: 1,
        quantity: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        orderId: 3,
        productId: 1,
        quantity: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        orderId: 4,
        productId: 1,
        quantity: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
    ], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('OrderDetails', null, {});
  }
};
