'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('ProductImages', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      image: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING
      }
      
    });
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('ProductImages');
  }
};
