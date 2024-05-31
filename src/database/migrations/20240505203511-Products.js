'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('Products', {
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
    
      description: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING
      },
      price: {
        allowNull: false,
        unique: true,
        type: Sequelize.INTEGER
      },
      categoryid: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Categories',
          key: 'id'
        }},
        isActive:{
          allowNull: false,
          type: Sequelize.BOOLEAN,
          defaultValue: true
        }
      },
    );
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('Products');
  }
};

