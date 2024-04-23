/*
id,user_id,adress,street,complement,reference
*/
const { DataTypes, Model } = require('sequelize');
const dbConnect = require('../database/connection.js');

class Address extends Model {
    static id;
    static userId;
    static address;
    static street;
    static complement;
    static reference;
}

Address.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    adress: {
        type: DataTypes.STRING,
        allowNull: false
    },
    street: {
        type: DataTypes.STRING,
        allowNull: false
    },
    complement: {
        type: DataTypes.STRING,
        allowNull: false
    },
    reference: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: dbConnect,
    modelName: 'Adress'
});

module.exports = Address;