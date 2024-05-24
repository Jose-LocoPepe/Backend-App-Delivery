const { DataTypes, Model } = require('sequelize');
const dbConnect = require('../database/connection');
const Category = require('./category');

class Product extends Model {
    static id;
    static name;
    static description;
    static price;
    /*static image;*/
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
        type: DataTypes.FLOAT, // Cambié STRING a FLOAT
        allowNull: false
    },
    /*image: {
        type: DataTypes.STRING,
        allowNull: false
    },*/

}, {
    sequelize: dbConnect,
    modelName: 'Product'
});

// Definir la asociación fuera de la clase
Product.belongsTo(Category, { foreignKey: 'categoryid' });

module.exports = Product;