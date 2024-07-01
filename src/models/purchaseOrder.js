const { DataTypes, Model } = require('sequelize');
const dbConnect = require('../database/connection');

class PurchaseOrder extends Model {
    static id;
    static date;
    static status;
    static totalPrice;
    static addressId;
    static clientId;
    static deliveryUserId;
}

PurchaseOrder.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
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
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    addressId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    clientId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Users',
            key: 'id'
        }
    },
    deliveryUserId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'Users',
            key: 'id'
        }
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
    modelName: 'PurchaseOrder',
    timestamps: true
});

module.exports = PurchaseOrder;