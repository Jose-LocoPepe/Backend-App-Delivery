const { request, response } = require("express");
const User = require("../models/user");
const Category = require("../models/category");
const ProductImage = require("../models/productsimage");
const cloudinary = require('cloudinary').v2;

const updateImageCloudinary = async (req = request, res = response) =>{
    try {
        const { collection, id } = req.params;
        let model;

        switch (collection) {
            case 'users':
                model = await User.findByPk(id);
                if(!model){
                    return res.status(400).json({
                        success: false,
                        message: "Usuario no existe"
                    });
                }
                break;
            case 'categories':
                model = await Category.findByPk(id);
                if(!model){
                    return res.status(400).json({
                        success: false,
                        message: "Categoria no existe"
                    });
                }
                break;
            case 'productsImages':
                model = await ProductImage.findByPk(id);
                if(!model){
                    return res.status(400).json({
                        success: false,
                        message: "Imagen no existe"
                    });
                }
                break;
            default:
                return res.status(400).json({
                    success: false,
                    message: "Coleccion invalida"
                });
            }
        
        if (model.image) {
            const nameImageArray = model.image.split('/');

            const nameImage = nameImageArray[nameImageArray.length - 1];
            const [public_image_id] = nameImage.split('.');
            console.log(public_image_id);

            cloudinary.uploader.destroy(`DeliveryImg/${collection}/${public_image_id}`);
        }

        // Extract temporal image
        const { tempFilePath } = req.files.archive;
        console.log("Archivo Tempoal:",tempFilePath);

        // upload to cloudinary
        const { secure_url } = await cloudinary.uploader.upload(tempFilePath, {
            folder: `DeliveryImg/${collection}`
        });

        console.log("Link:", secure_url);
        // Update image to user
        model.image = secure_url;
        await model.save();

        res.status(201).json({
            success: true,
            data: model.image,
            'message': 'Imagen actualizada con exito'
        });
    } catch (error) {
        
    }

}


module.exports = {
    updateImageCloudinary
}