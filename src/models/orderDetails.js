/*orderId, product_id, quantity */
const { DataTypes, Model } = require('sequelize');
const dbConnect = require('../database/connection');

class OrderDetails extends Model {
    static orderId;
    static productId;
    static quantity;
}

OrderDetails.init({
    orderId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    productId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize: dbConnect,
    modelName: 'OrderDetails'
});

module.exports = OrderDetails;