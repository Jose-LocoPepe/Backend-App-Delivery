const { Router } = require("express");

const { check } = require("express-validator");

const { validateFields } = require("../middlewares/validate-fields");
const { validateJWT } = require("../middlewares/validate-jwt");
const validateAdmin = require("../middlewares/validate-admin");

const { createCategory, getCategories,  deactivateCategory, updateCategory, getCategoryById } = require("../controllers/categoryController");




const router = Router();


// Create a category
router.post('/create', [
    check('name', 'El nombre es requerido').not().isEmpty(),
    check('description',  'La descripción es requerida.').not().isEmpty(),
    validateJWT,
    validateAdmin,
    validateFields
], createCategory);


// Get all categories
router.get('/getCategories', [
    validateJWT,
    validateFields
], getCategories);

// Update category
router.put('/:id', [
    check('name', 'Name is required').not().isEmpty(),
    check('description', 'Description is required').not().isEmpty(),
    validateJWT,
    validateAdmin,
    validateFields
], updateCategory);

// Get category by id
router.get('/get/:id', [
    validateJWT,
    validateFields
], getCategoryById);

// Delete category
router.post('/deactivate', [
    validateJWT,
    validateAdmin,
    validateFields
], deactivateCategory);

module.exports = router;