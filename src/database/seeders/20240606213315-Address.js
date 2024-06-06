'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Addresses', [
      {
        name: 'Casa Principal',
        street: '123 Calle Principal',
        neighborhood: 'Centro',
        longitude: '-99.133208',
        latitude: '19.432608',
        createdAt: new Date(),
        updatedAt: new Date(),
        user_id: 1 
      },
      {
        name: 'Oficina',
        street: '456 Avenida Empresarial',
        neighborhood: 'Negocios',
        longitude: '-99.133209',
        latitude: '19.432607',
        createdAt: new Date(),
        updatedAt: new Date(),
        user_id: 2 
      },
      {
        name: 'Casa de Campo',
        street: '789 Camino Rural',
        neighborhood: 'Campestre',
        longitude: '-99.133210',
        latitude: '19.432606',
        createdAt: new Date(),
        updatedAt: new Date(),
        user_id: 1 
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Addresses', null, {});
  }
};