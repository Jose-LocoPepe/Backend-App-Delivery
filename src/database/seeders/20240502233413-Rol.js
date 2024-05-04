'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Rols', [
      { 
        name: 'ADMINISTRADOR' 
      },
      {
        name: 'REPARTIDOR' 
      },
      {
        name: 'CLIENTE'
      }
  ], {});
},

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Rols', null, {});
  }
};
