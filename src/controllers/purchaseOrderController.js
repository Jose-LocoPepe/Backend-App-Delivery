const { request, response } = require("express");
const PurchaseOrder = require("../models/purchaseOrder");
const User = require("../models/user");
const Address = require("../models/address");
const Product = require("../models/product");
const OrderDetails = require("../models/orderDetails");
const ProductImage = require("../models/productsimage");

const dispatchOrder = async (req = request, res = response) => {
    try {
        const { orderId } = req.params;
        const { deliveryUserId } = req.body;
        const order = await PurchaseOrder.findOne({ where: { id: orderId } });

        if (!order) {
            return res.status(404).json({
                success: false,
                message: "Orden no encontrada"
            });
        }

        order.deliveryUserId = deliveryUserId;
        order.status = "dispatched";

        await order.save();

        return res.status(200).json({
            success: true,
            data: order,
            message: "Orden despachada correctamente"
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

// Define a function to get the base query configuration
function getBaseQueryConfig(status) {
    return {
        where: {
            status: status
        },
        include: {
            model: User,
            as: "client",
            attributes: ['name', 'lastName', 'phone'],
            include: {
                model: Address,
                attributes: ['street']
            }
        }
    };
}

const getPendingPurchaseOrders = async (req = request, res = response) => {
    try {
        const { userId } = req.params;
        const user = await User.findOne({ where: { id: userId } });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "Usuario no encontrado"
            });
        }

        if (user.rol_id === 1) {
            const pendingOrders = await PurchaseOrder.findAll(getBaseQueryConfig("pending"));
            return res.status(200).json({
                success: true,
                data: pendingOrders
            });
        } else if (user.rol_id === 2) {
            const pendingOrders = await PurchaseOrder.findAll({
                ...getBaseQueryConfig("pending"),
                where: {
                    ...getBaseQueryConfig("pending").where,
                    deliveryUserId: id
                }
            });
    
            return res.status(200).json({
                success: true,
                data: pendingOrders
            });
        } else {
            const pendingOrders = await PurchaseOrder.findAll({
                ...getBaseQueryConfig("pending"),
                where: {
                    ...getBaseQueryConfig("pending").where,
                    clientId: id
                }
            });
            return res.status(200).json({
                success: true,
                data: pendingOrders
            });
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

const getDispatchedPurchaseOrders = async (req = request, res = response) => {
    try {
        const { userId } = req.params;
        const user = await User.findOne({ where: { id: userId } });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "Usuario no encontrado"
            });
        }

        if (user.rol_id === 1) {
            const dispatchedOrders = await PurchaseOrder.findAll(getBaseQueryConfig("dispatched"));
            return res.status(200).json({
                success: true,
                data: dispatchedOrders
            });
        } else if (user.rol_id === 2) {
            const dispatchedOrders = await PurchaseOrder.findAll({
                ...getBaseQueryConfig("dispatched"),
                where: {
                    ...getBaseQueryConfig("dispatched").where,
                    deliveryUserId: id
                }
            });
            return res.status(200).json({
                success: true,
                data: dispatchedOrders
            });
        } else {
            const dispatchedOrders = await PurchaseOrder.findAll({
                ...getBaseQueryConfig("dispatched"),
                where: {
                    ...getBaseQueryConfig("dispatched").where,
                    clientId: id
                }
            });
            return res.status(200).json({
                success: true,
                data: dispatchedOrders
            });
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

const getDeliveredPurchaseOrders = async (req = request, res = response) => {
    try {
        const { userId } = req.params;
        const user = await User.findOne({ where: { id: userId } });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "Usuario no encontrado"
            });
        }

        if (user.rol_id === 1) {
            const deliveredOrders = await PurchaseOrder.findAll(getBaseQueryConfig("delivered"));
            return res.status(200).json({
                success: true,
                data: deliveredOrders
            });
        } else if (user.rol_id === 2) {
            const deliveredOrders = await PurchaseOrder.findAll({
                ...getBaseQueryConfig("delivered"),
                where: {
                    ...getBaseQueryConfig("delivered").where,
                    deliveryUserId: id
                }
            });
            return res.status(200).json({
                success: true,
                data: deliveredOrders
            });
        } else {
            const deliveredOrders = await PurchaseOrder.findAll({
                ...getBaseQueryConfig("delivered"),
                where: {
                    ...getBaseQueryConfig("delivered").where,
                    clientId: id
                }
            });
            return res.status(200).json({
                success: true,
                data: deliveredOrders
            });
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

const getOnTheWayPurchaseOrders = async (req = request, res = response) => {
    try {
        const { userId } = req.params;
        const user = await User.findOne({ where: { id: userId } });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "Usuario no encontrado"
            });
        }

        if (user.rol_id === 1) {
            const onTheWayOrders = await PurchaseOrder.findAll(getBaseQueryConfig("onTheWay"));
            return res.status(200).json({
                success: true,
                data: onTheWayOrders
            });
        } else if (user.rol_id === 2) {
            const onTheWayOrders = await PurchaseOrder.findAll({
                ...getBaseQueryConfig("onTheWay"),
                where: {
                    ...getBaseQueryConfig("onTheWay").where,
                    deliveryUserId: id
                }
            });
            return res.status(200).json({
                success: true,
                data: onTheWayOrders
            });
        } else {
            const onTheWayOrders = await PurchaseOrder.findAll({
                ...getBaseQueryConfig("onTheWay"),
                where: {
                    ...getBaseQueryConfig("onTheWay").where,
                    clientId: id
                }
            });
            return res.status(200).json({
                success: true,
                data: onTheWayOrders
            });
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

const getProductsByOrderId = async (req, res) => {
    try {
        const { orderId } = req.params;

        const orderDetails = await OrderDetails.findAll({
            where: { orderId: orderId },
            include: [{
                model: Product,
                required: true, // Ensures only OrderDetails with associated Products are returned
                attributes: ['name', 'description', 'price'],
                include: [{
                    model: ProductImage,
                    as: 'images',
                    attributes: ['image']
                }]
            }]
        });

        // Extracting products from orderDetails
        // const products = orderDetails.map(detail => detail.Product);
        // return res.json({
        //     success: true,
        //     products
        // });

        // Extracting products and their quantities from orderDetails
        const productsWithQuantities = orderDetails.map(detail => ({
            ...detail.Product.get({ plain: true }), // Spread the product details
            quantity: detail.quantity // Attach the quantity from OrderDetails
        }));

        return res.json({
            success: true,
            products: productsWithQuantities
        });
    } catch (error) {
        console.error('Error fetching products by orderId:', error);
        return res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
}

module.exports = {
    dispatchOrder, 
    getPendingPurchaseOrders, 
    getDispatchedPurchaseOrders,
    getDeliveredPurchaseOrders,
    getOnTheWayPurchaseOrders,
    getProductsByOrderId
}