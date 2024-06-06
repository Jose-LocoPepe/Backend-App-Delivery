const { DataTypes, Model } = require('sequelize');
const dbConnect = require('../database/connection');

class User extends Model {
    static id;
    static name;
    static lastName;
    static email;
    static phone;
    static password;
    static image;
}

User.init({

    name: {
        type: DataTypes.STRING
    },
    lastName: {
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
User.Rol = User.belongsTo(require ('./rol'), {foreignKey: 'rol_id'});

User.hasMany(require("./address"), { foreignKey: 'user_id' });

User.prototype.toJSON = function () {
    const user = this.get();
    // Destructura el objeto, en este caso, Usuario

    // Elimina la contraseña del objeto
    delete user.password;
    // incluimos el atributo rol_id
    user.rol_id = this.getDataValue('rol_id');
    return user;
}

module.exports = User;