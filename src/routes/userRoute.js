const { Router, request, response, next } = require("express");
const { check } = require("express-validator");
const ProductController = require("../controllers/productController")
const CategoryController = require("../controllers/categoryController")
const UserController = require("../controllers/userController")


//Controllers
//const UserController = require("../controllers/userController");

// Middlewares
const { validateFields } = require("../middlewares/validate-fields");
const { putUser } = require("../controllers/userController");
const productController = require("../controllers/productController");
const categoryController = require("../controllers/categoryController");
const router = Router();

//  GETS  //

router.get("/", async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get("/getProducts", productController.getProducts);
router.get("/getCategory", categoryController.getCategory);

router.post("/createCategory",categoryController.createCategory);
router.delete("/deleteCategory/:id",categoryController.deleteCategory);

router.put('/:id',[
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('lastName', 'El apellido es obligatorio').not().isEmpty(),
    check('phone', 'El telefono es obligatorio').not().isEmpty(),
    validateFields
],putUser)

router.get('/getProducts',ProductController.getProducts);
router.post('/createProduct',ProductController.createProduct);
router.get('/getPictures',ProductController.getPictures);
router.get('/getCategory', CategoryController.getCategory);
router.post('/createCategory', CategoryController.createCategory);
router.post('/deleteCategory', CategoryController.deleteCategory);

router.put('/:id/password',[check('currentPassword', 'La contraseña actual es obligatoria').not().isEmpty(),
check('newPassword', 'La nueva contraseña es obligatoria').not().isEmpty(),
validateFields], UserController.changePassword);

module.exports = router;

