    const { DataTypes, Model } = require('sequelize');
    const dbConnect = require('../database/connection');

    class Product extends Model {
        static id;
        static name;
        static description;
        static price;
        static isActive;
    }

    Product.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.FLOAT, // Cambio a FLOAT para precios
            allowNull: false
        },
        categoryId: {
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
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    }, {
        sequelize: dbConnect,
        modelName: 'Product',
        timestamps: true
    });

    // Categoria
    Product.Category = Product.belongsTo(require ('./category'), {foreignKey: 'categoryId'});

    module.exports = Product;
