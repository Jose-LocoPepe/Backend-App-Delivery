/*request_id, product_id, quantity */
const { DataTypes, Model } = require('sequelize');
const dbConnect = require('../database/connection');

class RequestDetails extends Model {
    static requestId;
    static productId;
    static quantity;
}

RequestDetails.init({
    requestId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
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
    modelName: 'RequestDetails'
});

module.exports = RequestDetails;