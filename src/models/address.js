const { DataTypes, Model } = require('sequelize');
const dbConnect = require('../database/connection');
const User = require('./user');
class Address extends Model {
    static id;
    static name;
    static street;
    static neighborhood;
    static longitude;
    static latitude;
}

Address.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    street: {
        type: DataTypes.STRING,
        allowNull: false
    },
    neighborhood: {
        type: DataTypes.STRING,
        allowNull: true
    },
    
    longitude: {
        type: DataTypes.STRING,
        allowNull: true
    },
    latitude: {
        type: DataTypes.STRING,
        allowNull: true
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
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Users', // Nombre de la tabla referenciada
            key: 'id'
        }
    },
    
}, {
    sequelize: dbConnect,
    modelName: 'Address',
    timestamps: true
});
Address.user_id = Address.belongsTo(require ('./user'), {foreignKey: 'user_id'});
// Address.belongsTo(User, { foreignKey: 'userId' });

module.exports = Address;
