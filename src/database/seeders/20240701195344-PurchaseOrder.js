'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('PurchaseOrders', [
      {
        date: new Date(),
        status: 'PENDIENTE',
        totalPrice: 150.00,
        clientId: 4,
        deliveryUserId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        date: new Date(),
        status: 'ENTREGADO',
        totalPrice: 200.00,
        clientId: 6,
        deliveryUserId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        date: new Date(),
        status: 'ENCAMINO',
        totalPrice: 300.00,
        clientId: 9,
        deliveryUserId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        date: new Date(),
        status: 'DESPACHADO',
        totalPrice: 170.00,
        clientId: 9,
        deliveryUserId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
    ], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('PurchaseOrders', null, {});
  }
};
