'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Categories', [
      {
        name: 'Frutas',
        image: 'img.jpg',
        description:'Frutas obviamente',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Verduras',
        image: 'img.png',
        description:'Verduras obviamente',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Postres',
        image: 'img.img',
        description:'YUMMY',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ensaladas',
        image: 'img.com',
        description:'lechuga con cosas',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bebidas',
        image: 'img.coma',
        description:'Liquidos',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
    ], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Categories', null, {});

  }
  
};

