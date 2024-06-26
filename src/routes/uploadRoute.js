const { Router } = require("express");
const { validateFields } = require("../middlewares/validate-fields");
const { validateArchiveUpload } = require("../middlewares/validate-archive");

const { updateImageCloudinary } = require("../controllers/uploadController");

const router = Router();


// Actualizar la imagen

// Creacion user db sin imagen
router.put('/:collection/:id', [
    validateArchiveUpload,
    validateFields
], updateImageCloudinary);

module.exports = router;