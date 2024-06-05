const { DataTypes, Model } = require('sequelize');
const dbConnect = require('../database/connection');

class Product extends Model {
    static id;
    static name;
    static description;
    static price;
    static categoryId;
    static createdAt;
    static updatedAt;
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
        type: DataTypes.STRING,
        allowNull: false
    },
    categoryId: {
        type: DataTypes.INTEGER,
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
    },
    isActive:{
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, {
    sequelize: dbConnect,
    modelName: 'Product'
});
Product.Category = Product.belongsTo(require ('./category'), {foreignKey: 'categoryId'});

module.exports = Product;