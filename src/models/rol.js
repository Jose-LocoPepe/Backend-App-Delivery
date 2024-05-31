const { DataTypes, Model } = require('sequelize');
const dbConnect = require('../database/connection');

class Rol extends Model {
    static id;
    static name;
}

Rol.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date()
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date()
    },
}, {
    sequelize: dbConnect,
    modelName: 'Rol'
});

module.exports = Rol;