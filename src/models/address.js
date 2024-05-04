/*
id,user_id,name,street,neighborhood,longitude,latitude
*/
const { DataTypes, Model } = require('sequelize');
const dbConnect = require('../database/connection.js');

class Address extends Model {
    static id;
    static userId;
    static name;
    static street;
    static neighborhood;
    static longitude;
    static latitude;
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
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    street: {
        type: DataTypes.STRING,
        allowNull: false
    },
    neighborhood: {
        type: DataTypes.STRING,
        allowNull: false
    },
    longitude: {
        type: DataTypes.STRING,
        allowNull: false
    },
    latitude: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: dbConnect,
    modelName: 'Address'
});

module.exports = Address;
