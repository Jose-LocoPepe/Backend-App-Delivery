const Sequelize = require('sequelize');
const { DataTypes, Model } = require('sequelize');
const dbConnect = require('../database/connection');

class Category extends Model {
    static id;
    static name;
    static description;
    static image;
}

Category.init({
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
    },/*
    image: {
        type: Sequelize.BLOB,
        allowNull: true
      }*/
}, {
    sequelize: dbConnect,
    modelName: 'Category'
});

module.exports = Category;
