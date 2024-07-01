const { Router } = require("express");
const { check } = require("express-validator");
const UserController = require("../controllers/userController");
const ProductController = require("../controllers/productController")
const AddressController = require("../controllers/addressController")


//Controllers
//const UserController = require("../controllers/userController");

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


router.put('/:id/password',[check('currentPassword', 'La contraseña actual es obligatoria').not().isEmpty(),
    check('newPassword', 'La nueva contraseña es obligatoria').not().isEmpty(),
    validateFields], UserController.changePassword);


router.patch('/product/:id/name',ProductController.updateName);



// Rutas de dirección
router.post('/:id/address/create',[
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('street', 'La calle es obligatoria').not().isEmpty(),
    check('neighborhood', 'El barrio es obligatorio').not().isEmpty(),
    check('longitude', 'La longitud es obligatoria').not().isEmpty(),
    check('latitude', 'La latitud es obligatoria').not().isEmpty(),
    validateFields
],AddressController.createAddress);

router.get('/:id/address/get',AddressController.getAddress);

router.get('/delivery', UserController.getDeliveryUsers);

module.exports = router;
