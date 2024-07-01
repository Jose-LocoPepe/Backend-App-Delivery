const { DataTypes, Model } = require('sequelize');
const dbConnect = require('../database/connection');

class OrderDetails extends Model {
    static id;
    static orderId;
    static productId;
    static quantity;
}

OrderDetails.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    orderId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'PurchaseOrder',
            key: 'id'
        }
    },
    productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Product',
            key: 'id'
        }
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
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
    modelName: 'OrderDetails',
    timestamps: true
});

module.exports = OrderDetails;