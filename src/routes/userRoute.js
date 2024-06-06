const { Router, request, response, next } = require("express");
const { check } = require("express-validator");
const ProductController = require("../controllers/productController")
const AddressController = require("../controllers/addressController")

//Controllers
//const UserController = require("../controllers/userController");

// Middlewares
const { validateFields } = require("../middlewares/validate-fields"); 
const { putUser } = require("../controllers/userController");

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

router.put('/:id',[
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('lastName', 'El apellido es obligatorio').not().isEmpty(),
    check('phone', 'El telefono es obligatorio').not().isEmpty(),
    validateFields
],putUser)

router.patch('/product/:id/name',ProductController.updateName);



// Rutas de dirección
router.post('/:id/address/create',[
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('street', 'La calle es obligatoria').not().isEmpty(),
    check('neighborhood', 'El barrio es obligatorio').not().isEmpty()
],AddressController.createAddress);

router.get('/:id/address/get',AddressController.getAddress);

module.exports = router;
