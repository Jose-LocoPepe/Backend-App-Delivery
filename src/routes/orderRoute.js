const { Router } = require("express");
const { check } = require("express-validator");
const OrderController = require("../controllers/purchaseOrderController");

const { validateFields } = require("../middlewares/validate-fields");
const validateAdmin = require("../middlewares/validate-admin");
const { validateJWT } = require("../middlewares/validate-jwt");

const router = Router();

router.patch("/:orderId/dispatch", [validateJWT, validateAdmin,
    check("orderId", "El id de la orden es obligatorio").not().isEmpty(),
    check("deliveryUserId", "El id del repartidor es obligatorio").not().isEmpty(),
    validateFields
], OrderController.dispatchOrder);
router.patch("/:orderId/deliver", [validateJWT,
    check("orderId", "El id de la orden es obligatorio").not().isEmpty(),
    validateFields
], OrderController.deliverOrder); // Falta el middleware de Repartidor
router.patch("/:orderId/startDelivery", [validateJWT,
    check("orderId", "El id de la orden es obligatorio").not().isEmpty(),
    validateFields
], OrderController.startDelivery); // Falta el middleware de Repartidor

router.get("/:userId/pending", [validateJWT,
    check("userId", "El id del usuario es obligatorio").not().isEmpty(),
    validateFields
], OrderController.getPendingPurchaseOrders);
router.get("/:userId/dispatched", [validateJWT,
    check("userId", "El id del usuario es obligatorio").not().isEmpty(),
    validateFields
], OrderController.getDispatchedPurchaseOrders);
router.get("/:userId/delivered", [validateJWT,
    check("userId", "El id del usuario es obligatorio").not().isEmpty(),
    validateFields
], OrderController.getDeliveredPurchaseOrders);
router.get("/:userId/on-the-way", [validateJWT,
    check("userId", "El id del usuario es obligatorio").not().isEmpty(),
    validateFields
], OrderController.getOnTheWayPurchaseOrders);

router.get("/:orderId/products", [validateJWT,
    check("orderId", "El id de la orden es obligatorio").not().isEmpty(),
    validateFields
], OrderController.getProductsByOrderId);

module.exports = router;