const { Router } = require('express');
const { submitPayment, getPaymentStatus } = require('../controllers/paymentController');
const { check } = require('express-validator');
const { validateFields } = require('../middlewares/validate-fields');
const { validateJWT } = require('../middlewares/validate-jwt');
const validateAdmin = require('../middlewares/validate-admin');

const router = Router();

router.post('/submit', [
    check('paymentMethodId', 'El ID del método de pago es requerido').not().isEmpty(),
    check('amount', 'El monto es requerido').isNumeric(),
    check('currency', 'La moneda es requerida').not().isEmpty(),
    check('clientId', 'El ID del cliente es requerido').not().isEmpty(),
    check('adressId', 'El ID de la dirección es requerido').not().isEmpty(),
    validateJWT,
    validateFields
], submitPayment);

router.get('/status/:paymentId', [
    validateJWT,
    validateFields
], getPaymentStatus);

module.exports = router;
