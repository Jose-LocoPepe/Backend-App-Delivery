const { DataTypes, Model } = require('sequelize');
const dbConnect = require('../database/connection');
//
class Category extends Model {
    static id;
    static name;
    static description;
    static image;
    static isActive;
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
    
    },
    image: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    sequelize: dbConnect,
    modelName: 'Categories'
});

module.exports = Category;
