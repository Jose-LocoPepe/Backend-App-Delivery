const { DataTypes, Model } = require('sequelize');
const dbConnect = require('../database/connection');

class ProductImage extends Model {
    
}

ProductImage.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    image: {
        type: DataTypes.STRING,
        allowNull: true
    },
    productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Products', // Nombre de la tabla referenciada
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
    modelName: 'ProductImage',
    timestamps: true
});
ProductImage.ProductId = ProductImage.belongsTo(require ('./product'), {foreignKey: 'productId'});

module.exports = ProductImage;
