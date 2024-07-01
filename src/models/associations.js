// associations.js
const Product = require('./product');
const ProductImage = require('./productsimage');
const Category = require('./category');
const User = require('./user');
const Address = require('./address');
const PurchaseOrder = require('./purchaseOrder');
const OrderDetail = require('./orderDetail');

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
PurchaseOrder.hasMany(OrderDetail, { foreignKey: 'orderId'});
OrderDetail.belongsTo(PurchaseOrder, { foreignKey: 'orderId'});

// Association for a product that has many order details
Product.hasMany(OrderDetail, { foreignKey: 'productId'});
OrderDetail.belongsTo(Product, { foreignKey: 'productId'});