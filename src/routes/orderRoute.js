const { Router } = require("express");
const { check } = require("express-validator");
const OrderController = require("../controllers/purchaseOrderController");

const { validateFields } = require("../middlewares/validate-fields");

const router = Router();

router.patch("/:orderId/dispatch", OrderController.dispatchOrder);

router.get("/:userId/pending", OrderController.getPendingPurchaseOrders);
router.get("/:userId/dispatched", OrderController.getDispatchedPurchaseOrders);
router.get("/:userId/delivered", OrderController.getDeliveredPurchaseOrders);
router.get("/:userId/on-the-way", OrderController.getOnTheWayPurchaseOrders);

router.get("/:orderId/products", OrderController.getProductsByOrderId);

module.exports = router;