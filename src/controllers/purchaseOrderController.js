const { request, response } = require("express");
const PurchaseOrder = require("../models/purchaseOrder");
const User = require("../models/user");
const Address = require("../models/address");


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

const getPendingPurchaseOrders = async (req = request, res = response) => {
    try {
        const pendingOrders = await PurchaseOrder.findAll({
            where: {
                status: "pending"
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
        });

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
        const dispatchedOrders = await PurchaseOrder.findAll({
            where: {
                status: "dispatched"
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
        });

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
        const deliveredOrders = await PurchaseOrder.findAll({
            where: {
                status: "delivered"
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
        });

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
        const onTheWayOrders = await PurchaseOrder.findAll({
            where: {
                status: "onTheWay"
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
        });

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

module.exports = {
    dispatchOrder, 
    getPendingPurchaseOrders, 
    getDispatchedPurchaseOrders,
    getDeliveredPurchaseOrders,
    getOnTheWayPurchaseOrders
}
