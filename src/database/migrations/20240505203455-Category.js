'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('Categories', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING
      },
      image: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING
      },
      description: {
        allowNull: false,
        unique: true,
        type: Sequelize.INTEGER
      },
      
    });
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('Categories');
  }
};