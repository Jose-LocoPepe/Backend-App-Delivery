const { Router } = require("express");

const { check } = require("express-validator");

const { validateFields } = require("../middlewares/validate-fields");
const { validateJWT } = require("../middlewares/validate-jwt");
const validateAdmin = require("../middlewares/validate-admin");

const { createProduct, getProducts,deactivateProduct, getPictures} = require("../controllers/productController");
const router = Router();

router.get('/', (req, res) => {
    res.send('Hello World')
}
);

router.post('/create', [
    check('name', 'El nombre es requerido').not().isEmpty(),
    check('description', 'La descripción es requerida').not().isEmpty(),
    check('price', 'El precio es requerido').not().isEmpty(),
    check('categoryId', 'La categoria es requerida').not().isEmpty(),
    validateJWT,
    validateAdmin,
    validateFields
], createProduct);

router.get('/getProducts', [
    validateJWT,
    validateFields
], getProducts);

router.post('/deactivate', [
    validateJWT,
    validateAdmin,
    validateFields
], deactivateProduct);

router.post('/getPictures', [
    validateJWT,
    validateFields
], getPictures);


module.exports = router;