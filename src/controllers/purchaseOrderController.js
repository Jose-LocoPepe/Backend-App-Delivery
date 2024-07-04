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
        order.status = "DESPACHADO";

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
function getBaseQueryConfig(status, addressId) {
    return {
        where: {
            status: status
        },
        attributes: {
            exclude: ['createdAt', 'updatedAt']
        },
        include: [
            {
                model: User,
                as: "client",
                attributes: ['name', 'lastName', 'phone'],
            },
            {
                model: Address,
                as: "address",
                attributes: ['street'],
            },
            {
                model: User,
                as: "deliveryUser",
                attributes: ['name', 'lastName'],
            },
        ],
    };
}

const getOrdersBasedOnUserRole = async (userRole, userId, status) => {
    let whereClause = {};

    switch (userRole) {
        case 1:
            break;
        case 2:
            whereClause.deliveryUserId = userId;
            break;
        default:
            whereClause.clientId = userId;
            break;
    }

    const queryConfig = getBaseQueryConfig(status);
    if (Object.keys(whereClause).length > 0) {
        queryConfig.where = { ...queryConfig.where, ...whereClause };
    }

    return await PurchaseOrder.findAll(queryConfig);
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
        const pendingOrders = await getOrdersBasedOnUserRole(user.rol_id, user.id,"PENDIENTE");

        if (pendingOrders.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No se encontraron órdenes de compra pendientes"
            });
        }

        return res.status(200).json({
            success: true,
            data: pendingOrders
        });
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
        const dispatchedOrders = await getOrdersBasedOnUserRole(user.rol_id, user.id,"DESPACHADO");
        
        if (dispatchedOrders.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No se encontraron órdenes de compra despachadas"
            });
        }

        return res.status(200).json({
            success: true,
            data: dispatchedOrders
        });
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
        
        const deliveredOrders = await getOrdersBasedOnUserRole(user.rol_id, user.id,"ENTREGADO");
        
        if (deliveredOrders.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No se encontraron órdenes de compra entregadas"
            });
        }
        
        return res.status(200).json({
            success: true,
            data: deliveredOrders
        });
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
        
        const onTheWayOrders = await getOrdersBasedOnUserRole(user.rol_id, user.id,"ENCAMINO");
        
        if (onTheWayOrders.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No se encontraron órdenes de compra en camino"
            });
        }

        return res.status(200).json({
            success: true,
            data: onTheWayOrders
        });
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
                attributes: ['id','name'],
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
            data: productsWithQuantities
        });
    } catch (error) {
        console.error('Error fetching products by orderId:', error);
        return res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
}

const deliverOrder = async (req = request, res = response) => {
    try {
        const { orderId } = req.params;
        const order = await PurchaseOrder.findOne({ where: { id: orderId } });

        if (!order) {
            return res.status(404).json({
                success: false,
                message: "Orden no encontrada"
            });
        }

        // Assuming the order can only be delivered if it's currently dispatched
        if (order.status !== "DESPACHADO") {
            return res.status(400).json({
                success: false,
                message: "La orden no está en estado despachado"
            });
        }

        order.status = "ENTREGADO";

        await order.save();

        return res.status(200).json({
            success: true,
            data: order,
            message: "Orden entregada correctamente"
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
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