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
        email: 'diego.aguilera@alummos.ucn.cl',
        phone: '555-1234',
        password: bcryptjs.hashSync('delivery2024', salt),
        image: 'imagen1.png',
        rol_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pepe',
        lastName: 'Test',
        email: 't@t.cl',
        phone: '123456789',
        password: bcryptjs.hashSync('test', salt),
        image: 'imagen2.png',
        rol_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Juan',
        lastName: 'Urrutia',
        email: 't2@t2.cl',
        phone: '123456789',
        password: bcryptjs.hashSync('test2', salt),
        image: 'imagen3.png',
        rol_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Benito',
        lastName: 'Martinez',
        email: 't3@t3.cl',
        phone: '123456789',
        password: bcryptjs.hashSync('test3', salt),
        image: 'imagen4.png',
        rol_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Maria',
        lastName: 'Gonzalez',
        email: 'maria.gonzalez@alummos.ucn.cl',
        phone: '555-3344',
        password: bcryptjs.hashSync('password1', salt),
        image: 'imagen5.png',
        rol_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Robert',
        lastName: 'Brown',
        email: 'robert.brown@alummos.ucn.cl',
        phone: '555-4455',
        password: bcryptjs.hashSync('password2', salt),
        image: 'imagen6.png',
        rol_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Linda',
        lastName: 'Johnson',
        email: 'linda.johnson@alummos.ucn.cl',
        phone: '555-5566',
        password: bcryptjs.hashSync('password3', salt),
        image: 'imagen7.png',
        rol_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Michael',
        lastName: 'Davis',
        email: 'michael.davis@alummos.ucn.cl',
        phone: '555-6677',
        password: bcryptjs.hashSync('password4', salt),
        image: 'imagen8.png',
        rol_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Emily',
        lastName: 'Clark',
        email: 'emily.clark@alummos.ucn.cl',
        phone: '555-7788',
        password: bcryptjs.hashSync('password5', salt),
        image: 'imagen9.png',
        rol_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Daniel',
        lastName: 'Lewis',
        email: 'daniel.lewis@alummos.ucn.cl',
        phone: '555-8899',
        password: bcryptjs.hashSync('password6', salt),
        image: 'imagen10.png',
        rol_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Fernando',
        lastName: 'Valenzuela',
        email: 'fernando.valenzuela@alummos.ucn.cl',
        phone: '555-9911',
        password: bcryptjs.hashSync('password7', salt),
        image: 'imagen11.png',
        rol_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
