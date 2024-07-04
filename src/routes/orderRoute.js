const { Router } = require("express");
const { check } = require("express-validator");
const OrderController = require("../controllers/purchaseOrderController");

const { validateFields } = require("../middlewares/validate-fields");
const validateAdmin = require("../middlewares/validate-admin");
const { validateJWT } = require("../middlewares/validate-jwt");

const router = Router();

router.patch("/:orderId/dispatch", [
    check("orderId", "El id de la orden es obligatorio").not().isEmpty(),
    check("deliveryUserId", "El id del repartidor es obligatorio").not().isEmpty(),
    validateFields,
    // validateJWT,
    // validateAdmin
], OrderController.dispatchOrder);


router.patch("/:orderId/deliver", [
    check("orderId", "El id de la orden es obligatorio").not().isEmpty(),
    validateFields,
    // validateJWT,
], OrderController.deliverOrder); // Falta el middleware de Repartidor


router.patch("/:orderId/startDelivery", [
    check("orderId", "El id de la orden es obligatorio").not().isEmpty(),
    validateFields,
    // validateJWT,
], OrderController.startDelivery); // Falta el middleware de Repartidor


router.get("/:userId/pending", [
    check("userId", "El id del usuario es obligatorio").not().isEmpty(),
    validateFields,
    // validateJWT,
], OrderController.getPendingPurchaseOrders);


router.get("/:userId/dispatched", [
    check("userId", "El id del usuario es obligatorio").not().isEmpty(),
    validateFields,
    // validateJWT,
], OrderController.getDispatchedPurchaseOrders);


router.get("/:userId/delivered", [
    check("userId", "El id del usuario es obligatorio").not().isEmpty(),
    validateFields,
    // validateJWT,
], OrderController.getDeliveredPurchaseOrders);


router.get("/:userId/on-the-way", [
    check("userId", "El id del usuario es obligatorio").not().isEmpty(),
    validateFields,
    // validateJWT,
], OrderController.getOnTheWayPurchaseOrders);


router.get("/:orderId/products", [
    check("orderId", "El id de la orden es obligatorio").not().isEmpty(),
    validateFields,
    // validateJWT,
], OrderController.getProductsByOrderId);

module.exports = router;