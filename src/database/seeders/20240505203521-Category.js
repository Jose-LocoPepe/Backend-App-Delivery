'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categories', [
      {
        name: 'Fruits',
        image: 'fruits.jpg',
        description: 'Fresh and delicious fruits',
        createdAt: new Date(),
        updatedAt: new Date(),
        isActive: true
      },
      {
        name: 'Vegetables',
        image: 'vegetables.jpg',
        description: 'Green and healthy vegetables',
        createdAt: new Date(),
        updatedAt: new Date(),
        isActive: true
      },
      {
        name: 'Dairy',
        image: 'dairy.jpg',
        description: 'Milk, cheese, and other dairy products',
        createdAt: new Date(),
        updatedAt: new Date(),
        isActive: true
      },
      {
        name: 'Bakery',
        image: 'bakery.jpg',
        description: 'Freshly baked breads and pastries',
        createdAt: new Date(),
        updatedAt: new Date(),
        isActive: true
      },
      {
        name: 'Meat',
        image: 'meat.jpg',
        description: 'High-quality meat products',
        createdAt: new Date(),
        updatedAt: new Date(),
        isActive: true
      },
      {
        name: 'Seafood',
        image: 'seafood.jpg',
        description: 'Fresh seafood from the ocean',
        createdAt: new Date(),
        updatedAt: new Date(),
        isActive: true
      },
      {
        name: 'Snacks',
        image: 'snacks.jpg',
        description: 'Tasty snacks for every occasion',
        createdAt: new Date(),
        updatedAt: new Date(),
        isActive: true
      },
      {
        name: 'Beverages',
        image: 'beverages.jpg',
        description: 'Refreshing drinks and beverages',
        createdAt: new Date(),
        updatedAt: new Date(),
        isActive: true
      },
      {
        name: 'Condiments',
        image: 'condiments.jpg',
        description: 'Sauces, spices, and other condiments',
        createdAt: new Date(),
        updatedAt: new Date(),
        isActive: true
      },
      {
        name: 'Frozen Foods',
        image: 'frozen_foods.jpg',
        description: 'Convenient and delicious frozen foods',
        createdAt: new Date(),
        updatedAt: new Date(),
        isActive: true
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
  }
};