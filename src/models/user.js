const { DataTypes, Model } = require('sequelize');
const dbConnect = require('../database/connection');

class User extends Model {
    static id;
    static name;
    static lastnames;
    static email;
    static phone;
    static password;
    static image;
}

User.init({

    name: {
        type: DataTypes.STRING
    },
    lastnames: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING,
        unique: true
    },
    phone: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    image: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    sequelize: dbConnect,
    modelName: 'User'
});
User.Role = User.belongsTo(require ('./role'), {foreignKey: 'role_id'});

User.prototype.toJSON = function () {
    const user = this.get();
    // Destructura el objeto, en este caso, Usuario

    // Elimina la contraseña del objeto
    delete user.password;
    // incluimos el atributo role_id
    user.role_id = this.getDataValue('role_id');
    return user;
}

module.exports = User;