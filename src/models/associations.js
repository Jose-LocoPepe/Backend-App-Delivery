// associations.js
const Product = require('./product');
const ProductImage = require('./productsimage');
const Category = require('./category');
const User = require('./user');
const Address = require('./address');
const PurchaseOrder = require('./purchaseOrder');
const OrderDetails = require('./orderDetails');

Product.hasMany(ProductImage, { foreignKey: 'productId', as: 'images' });
ProductImage.belongsTo(Product, { foreignKey: 'productId', as: 'product' });

Product.belongsTo(Category, { foreignKey: 'categoryId', as: 'category' });
Category.hasMany(Product, { foreignKey: 'categoryId' });

User.hasMany(require("./address"), { foreignKey: 'user_id' });
Address.belongsTo(require ('./user'), {foreignKey: 'user_id'});

// Association for a client who has many purchase orders
User.hasMany(PurchaseOrder, { foreignKey: 'clientId', as: 'clientOrders' });
PurchaseOrder.belongsTo(User, { foreignKey: 'clientId', as: 'client' });

// Association for a delivery user who carries many purchase orders
User.hasMany(PurchaseOrder, { foreignKey: 'deliveryUserId', as: 'deliveryOrders' });
PurchaseOrder.belongsTo(User, { foreignKey: 'deliveryUserId', as: 'deliveryUser' });


// Association for a purchase order that has many order details
PurchaseOrder.hasMany(OrderDetails, { foreignKey: 'orderId'});
OrderDetails.belongsTo(PurchaseOrder, { foreignKey: 'orderId'});

// Association for a product that has many order details
Product.hasMany(OrderDetails, { foreignKey: 'productId'});
OrderDetails.belongsTo(Product, { foreignKey: 'productId'});


PurchaseOrder.belongsTo(Address, { foreignKey: 'addressId', as: 'address' });