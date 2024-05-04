const { DataTypes, Model } = require('sequelize');
const dbConnect = require('../database/connection');

class Role extends Model {
    static id;
    static name;
}

Role.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: dbConnect,
    modelName: 'Role'
});

module.exports = Role;