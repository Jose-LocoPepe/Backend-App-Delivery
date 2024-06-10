// associations.js
const Product = require('./product');
const ProductImage = require('./productsimage');
const Category = require('./category');
const User = require('./user');
const Address = require('./address');

Product.hasMany(ProductImage, { foreignKey: 'productId', as: 'images' });
ProductImage.belongsTo(Product, { foreignKey: 'productId', as: 'product' });

Product.belongsTo(Category, { foreignKey: 'categoryId', as: 'category' });
Category.hasMany(Product, { foreignKey: 'categoryId' });

User.hasMany(require("./address"), { foreignKey: 'user_id' });
Address.belongsTo(require ('./user'), {foreignKey: 'user_id'});