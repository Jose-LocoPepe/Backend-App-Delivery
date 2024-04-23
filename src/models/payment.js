/*
id,client_id,adress_id,request_date,status,totalPrice
*/
const { DataTypes, Model } = require('sequelize');
const dbConnect = require('../database/connection');

class Payment extends Model {
    static id;
    static clientId;
    static adressId;
    static requestDate;
    static status;
    static totalPrice;
}

Payment.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    clientId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    adressId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    requestDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    },
    totalPrice: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: dbConnect,
    modelName: 'Payment'
});

module.exports = Payment;