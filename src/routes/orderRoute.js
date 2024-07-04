const { Router } = require("express");
const { check } = require("express-validator");
const OrderController = require("../controllers/purchaseOrderController");

const { validateFields } = require("../middlewares/validate-fields");
const validateAdmin = require("../middlewares/validate-admin");
const { validateJWT } = require("../middlewares/validate-jwt");

const router = Router();

router.patch("/:orderId/dispatch", [validateJWT, validateAdmin], OrderController.dispatchOrder);
router.patch("/:orderId/deliver", [validateJWT,], OrderController.deliverOrder); // Falta el middleware de Repartidor
router.patch("/:orderId/startDelivery", [validateJWT,], OrderController.deliverOrder); // Falta el middleware de Repartidor

router.get("/:userId/pending", validateJWT, OrderController.getPendingPurchaseOrders);
router.get("/:userId/dispatched", validateJWT, OrderController.getDispatchedPurchaseOrders);
router.get("/:userId/delivered", validateJWT, OrderController.getDeliveredPurchaseOrders);
router.get("/:userId/on-the-way", validateJWT, OrderController.getOnTheWayPurchaseOrders);

router.get("/:orderId/products", validateJWT, OrderController.getProductsByOrderId);

module.exports = router;