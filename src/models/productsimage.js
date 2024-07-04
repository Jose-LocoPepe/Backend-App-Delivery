const { DataTypes, Model } = require('sequelize');
const dbConnect = require('../database/connection');

class ProductImage extends Model {
    static id;
    static image;
    static productId;
    static createdAt;
    static updatedAt;
    
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

module.exports = ProductImage;
