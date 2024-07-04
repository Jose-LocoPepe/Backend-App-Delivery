const { Router } = require("express");

const { check } = require("express-validator");

const { validateFields } = require("../middlewares/validate-fields");
const { validateJWT } = require("../middlewares/validate-jwt");
const validateAdmin = require("../middlewares/validate-admin");

const { createProduct,getFirstProductImage,getProductsImages,updateProduct, getProductByID, getProducts,deactivateProduct, getPictures} = require("../controllers/productController");
const router = Router();


router.get('/getFirstProductImage/:id',[
], getFirstProductImage);

router.post('/create', [
    check('name', 'El nombre es requerido').not().isEmpty(),
    check('description', 'La descripción es requerida').not().isEmpty(),
    check('price', 'El precio es requerido').not().isEmpty(),
    check('categoryId', 'La categoria es requerida').not().isEmpty(),
    validateJWT,
    validateAdmin,
    validateFields
], createProduct);
router.put('/:id', [
    check('name', 'Name is required').not().isEmpty(),
    check('description', 'Description is required').not().isEmpty(),
    validateJWT,
    validateAdmin,
    validateFields
], updateProduct);

router.get('/getImages/:id',[
    validateJWT,
    validateFields
], getProductsImages);



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