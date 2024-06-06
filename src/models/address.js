/*
id,user_id,adress,street,complement,reference
*/
const { DataTypes, Model } = require('sequelize');
const dbConnect = require('../database/connection.js');

class Address extends Model {
    static id;
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
        allowNull: true
    },
    
    longitude: {
        type: DataTypes.STRING,
        allowNull: true
    },
    latitude: {
        type: DataTypes.STRING,
        allowNull: true
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    }
}, {
    sequelize: dbConnect,
    modelName: 'Address',
    timestamps: true
});

// clave foranea
Address.User = Address.belongsTo(require('./user'), { foreignKey: 'user_id' });
module.exports = Address;
