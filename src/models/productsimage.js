const { DataTypes, Model } = require('sequelize');
const dbConnect = require('../database/connection');

class ProductImage extends Model {
    static id;
    static image;
}

ProductImage.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    image: {
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
    }
}, {
    sequelize: dbConnect,
    modelName: 'ProductImage'
});

ProductImage.ProductId = ProductImage.belongsTo(require ('./product'), {foreignKey: 'productId'});

module.exports = ProductImage;
