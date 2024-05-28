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
        allowNull: true,
        allowNull: true,
        unique: true,
        type: Sequelize.BLOB,
        references: {
          model: 'CategoryImage',
          key: 'id'
        }
      },
      description: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
      
    });
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('Categories');
  }
};
