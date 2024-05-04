/*
id,client_id,address_id,request_date,status,totalPrice
*/
const { DataTypes, Model } = require('sequelize');
const dbConnect = require('../database/connection');

class PurchaseOrder extends Model {
    static id;
    static clientId;
    static addressId;
    static date;
    static status;
    static totalPrice;
    static deliveryId;
}

PurchaseOrder.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    clientId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    addressId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    date: {
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
    },
    deliveryId: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
}, {
    sequelize: dbConnect,
    modelName: 'PurchaseOrder'
});

module.exports = PurchaseOrder;