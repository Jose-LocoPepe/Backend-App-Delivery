const { Router } = require("express");
const { check } = require("express-validator");
const ProductController = require("../controllers/productController");
const CategoryController = require("../controllers/categoryController");
const UserController = require("../controllers/userController");

// Middlewares

const { validateFields } = require("../middlewares/validate-fields"); 
const { putUser } = require("../controllers/userController");


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
    check('lastName', 'El apellido es obligatorio').not().isEmpty(),
    check('phone', 'El telefono es obligatorio').not().isEmpty(),
    validateFields
], UserController.putUser);


router.patch('/product/:id/name',ProductController.updateName);
/*
router.get('/getProducts',ProductController.getProducts);
router.get('/getPictures',ProductController.getPictures);
router.post('/deleteProduct', ProductController.deactivateProduct);
router.post('/createProduct', ProductController.createProduct);


router.get('/getCategory', CategoryController.getCategory);
router.post('/createCategory', CategoryController.createCategory);
router.post('/deleteCategory', CategoryController.deactivateCategory);*/

module.exports = router;
