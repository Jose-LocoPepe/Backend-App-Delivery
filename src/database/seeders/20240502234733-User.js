const bcryptjs = require('bcryptjs');
const { Rol } = require('../../models/user');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const salt = bcryptjs.genSaltSync();
    return queryInterface.bulkInsert('Users', [
      {
        name: 'Diego',
        lastName: 'Aguilera',
        email:'diego.aguilera@alumnos.ucn.cl',
        phone: '123456789',
        password: bcryptjs.hashSync('Delivery2024', salt),
        image: 'image',
        rol_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pepe',
        lastName: 'test',
        email:'t@t.cl',
        phone: '123456789',
        password: bcryptjs.hashSync('test', salt),
        image: 'image',
        rol_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
      {

        name: 'Elsa',
        lastName: 'Capunta',
        email:'t2@t2.cl',
        phone: '123456789',
        password: bcryptjs.hashSync('test2', salt),
        image: 'image2',
        rol_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Benito',
        lastName: 'Camelo',
        email:'t3@t3.cl',
        phone: '123456789',
        password: bcryptjs.hashSync('test3', salt),
        image: 'image3',

        rol_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});

  }
  
};
