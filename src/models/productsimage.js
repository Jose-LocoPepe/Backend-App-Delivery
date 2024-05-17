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
    }
}, {
    sequelize: dbConnect,
    modelName: 'ProductImage'
});

ProductImage.ProductId = ProductImage.belongsTo(require ('./product'), {foreignKey: 'productid'});

module.exports = ProductImage;
