const bcryptjs = require('bcryptjs');
const { Rol } = require('../../models/user');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const salt = bcryptjs.genSaltSync();
    return queryInterface.bulkInsert('Users', [
      {
        name: 'Pepe',
        lastname: 'test',
        email:'t@t.cl',
        phone: '123456789',
        password: bcryptjs.hashSync('test', salt),
        imagen: 'imagen',
        rol_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Elsa',
        lastname: 'Capunta',
        email:'t2@t2.cl',
        phone: '123456789',
        password: bcryptjs.hashSync('test2', salt),
        imagen: 'imagen2',
        rol_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mati',
        lastname: 'Nuñes',
        email:'m@m.cl',
        phone: '123456789',
        password: bcryptjs.hashSync('123', salt),
        imagen: 'imagen3',
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
