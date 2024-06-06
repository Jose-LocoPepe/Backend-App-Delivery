const { Router } = require("express");
const { check } = require("express-validator");
const ProductController = require("../controllers/productController");
const CategoryController = require("../controllers/categoryController");
const UserController = require("../controllers/userController");

// Middlewares
const { validateFields } = require("../middlewares/validate-fields");

const router = Router();

//  User Routes  //

router.get("/", async (req, res) => {
    try {
        const users = await UserController.getUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.put('/:id', [
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('lastname', 'El apellido es obligatorio').not().isEmpty(),
    check('phone', 'El telefono es obligatorio').not().isEmpty(),
    validateFields
], UserController.putUser);

//  Product Routes  //

router.get('/getProducts', ProductController.getProducts);
router.get('/getPictures', ProductController.getPictures);
router.post('/createProduct', ProductController.createProduct);
router.post('/deleteProduct', ProductController.deactivateProduct);

router.put('/updateProduct/:id', [
    check('name').optional().isString().withMessage('El nombre debe ser una cadena de texto válida'),
    check('description').optional().isString().withMessage('La descripción debe ser una cadena de texto válida'),
    check('price').optional().isInt({ min: 0 }).withMessage('El precio debe ser un número positivo'),
    check('categoryId').optional().isInt({ min: 1 }).withMessage('El ID de la categoría debe ser un número positivo'),
    validateFields
], ProductController.updateProduct);
router.patch('/updateProductName', ProductController.updateName);
router.patch('/updateProductPrice', ProductController.updatePrice);
router.patch('/updateProductImage', ProductController.updateImage);

//  Category Routes  //

router.get('/getCategory', CategoryController.getCategory);
router.post('/createCategory', CategoryController.createCategory);
router.post('/deleteCategory', CategoryController.deactivateCategory);

module.exports = router;
