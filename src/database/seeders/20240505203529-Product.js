'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', [
      { name: 'Apple', description: 'Fresh red apples', price: 120, categoryid: 1, isActive: true },
      { name: 'Banana', description: 'Yellow bananas', price: 50, categoryid: 1, isActive: true },
      { name: 'Carrot', description: 'Orange carrots', price: 80, categoryid: 2, isActive: true },
      { name: 'Bread', description: 'Whole wheat bread', price: 250, categoryid: 3, isActive: true },
      { name: 'Milk', description: '1 liter of milk', price: 150, categoryid: 4, isActive: true },
      { name: 'Cheese', description: 'Cheddar cheese', price: 300, categoryid: 4, isActive: true },
      { name: 'Chicken Breast', description: 'Boneless chicken breast', price: 500, categoryid: 5, isActive: true },
      { name: 'Salmon', description: 'Fresh salmon fillets', price: 1000, categoryid: 6, isActive: true },
      { name: 'Eggs', description: 'A dozen eggs', price: 200, categoryid: 4, isActive: true },
      { name: 'Lettuce', description: 'Fresh green lettuce', price: 100, categoryid: 2, isActive: true }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});
  }
};
