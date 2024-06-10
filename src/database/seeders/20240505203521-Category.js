'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    try {
    await queryInterface.bulkInsert('Categories', [
      {
        name: 'Fruits',
        image: 'https://res.cloudinary.com/dofmijffe/image/upload/v1717983991/DeliveryImg/categories/xuqvgsxvs8n58flnzva2.jpg',
        description: 'Fresh and delicious fruits',
        createdAt: new Date(),
        updatedAt: new Date(),
        isActive: true
      },
      {
        name: 'Vegetables',
        image: 'https://res.cloudinary.com/dofmijffe/image/upload/v1717984131/DeliveryImg/categories/t1magon4yams2j9tawqv.webp',
        description: 'Green and healthy vegetables',
        createdAt: new Date(),
        updatedAt: new Date(),
        isActive: true
      },
      {
        name: 'Dairy',
        image: 'https://res.cloudinary.com/dofmijffe/image/upload/v1717984199/DeliveryImg/categories/fqjlncu0oceguwrhayxu.jpg',
        description: 'Milk, cheese, and other dairy products',
        createdAt: new Date(),
        updatedAt: new Date(),
        isActive: true
      },
      {
        name: 'Bakery',
        image: 'https://res.cloudinary.com/dofmijffe/image/upload/v1717984239/DeliveryImg/categories/wozfjzfpdysu962ysoxb.png',
        description: 'Freshly baked breads and pastries',
        createdAt: new Date(),
        updatedAt: new Date(),
        isActive: true
      },
      {
        name: 'Meat',
        image: 'https://res.cloudinary.com/dofmijffe/image/upload/v1717984281/DeliveryImg/categories/xo2i5dvqbx6flgzdzv3b.jpg',
        description: 'High-quality meat products',
        createdAt: new Date(),
        updatedAt: new Date(),
        isActive: true
      },
      {
        name: 'Seafood',
        image: 'https://res.cloudinary.com/dofmijffe/image/upload/v1717984348/DeliveryImg/categories/pzrjp88kh6vv9oq9zmw3.webp',
        description: 'Fresh seafood from the ocean',
        createdAt: new Date(),
        updatedAt: new Date(),
        isActive: true
      },
      {
        name: 'Snacks',
        image: 'https://res.cloudinary.com/dofmijffe/image/upload/v1717984423/DeliveryImg/categories/n1coj2aftb0dsgm6yvvc.jpg',
        description: 'Tasty snacks for every occasion',
        createdAt: new Date(),
        updatedAt: new Date(),
        isActive: true
      },
      {
        name: 'Beverages',
        image: 'https://res.cloudinary.com/dofmijffe/image/upload/v1717984454/DeliveryImg/categories/lultxpkhbihqjmdsdipf.jpg',
        description: 'Refreshing drinks and beverages',
        createdAt: new Date(),
        updatedAt: new Date(),
        isActive: true
      },
      {
        name: 'Condiments',
        image: 'https://res.cloudinary.com/dofmijffe/image/upload/v1717984491/DeliveryImg/categories/zhrb8gmz1pc7pelenpxw.jpg',
        description: 'Sauces, spices, and other condiments',
        createdAt: new Date(),
        updatedAt: new Date(),
        isActive: true
      },
      {
        name: 'Frozen Foods',
        image: 'https://res.cloudinary.com/dofmijffe/image/upload/v1717984533/DeliveryImg/categories/horbepsbub9swekfznyl.jpg',
        description: 'Convenient and delicious frozen foods',
        createdAt: new Date(),
        updatedAt: new Date(),
        isActive: true
      }
    ], {});
  } catch (error) {
    console.error('Error en la inserción masiva:', error);
  }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
  }
};