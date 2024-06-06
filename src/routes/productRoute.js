const { Router } = require("express");

const { check } = require("express-validator");

const { validateFields } = require("../middlewares/validate-fields");
const { validateJWT } = require("../middlewares/validate-jwt");
const validateAdmin = require("../middlewares/validate-admin");

const { createProduct, getProductByID, getProducts,deactivateProduct, getPictures} = require("../controllers/productController");
const router = Router();


router.post('/create', [
    check('name', 'El nombre es requerido').not().isEmpty(),
    check('description', 'La descripción es requerida').not().isEmpty(),
    check('price', 'El precio es requerido').not().isEmpty(),
    check('categoryId', 'La categoria es requerida').not().isEmpty(),
    validateJWT,
    validateAdmin,
    validateFields
], createProduct);

router.get('/get/:id',[
    validateJWT,
    validateFields
], getProductByID);

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