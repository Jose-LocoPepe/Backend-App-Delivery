const { request, response } = require("express");

const { isAlphaNumericSpaceGuionPunto, onlyPositiveIntegers } = require("../helpers/utils.js");

// Models
const Product = require("../models/product");
const ProductImage = require("../models/productsimage");

const createProduct = async (req = request, res = response) => {
    try {
        const { name, 
            description, 
            price, 
            categoryId } = req.body;


        if (!isAlphaNumericSpaceGuionPunto(name), !isAlphaNumericSpaceGuionPunto(description)) {

            return res.status(400).json({
                success: false,
                message: "Invalid input"
            });
        }


        if (!onlyPositiveIntegers(price)) {

            return res.status(400).json({
                success: false,
                message: "Invalid input"
            });
        }


        const existProduct = await Product.findOne({ where: { name: name } });
        if (existProduct) {
            return res.status(400).json({
                success: false,
                message: "Product already exists"
            });
        }

        const product = await Product.create({
            name: name,
            description: description,
            price: price,
            categoryId: categoryId,

        });
        // Crear 3 imagenes por defecto
        const productImage1 = await ProductImage.create({
            productId: product.id,
            image: null
        });
        const productImage2 = await ProductImage.create({
            productId: product.id,
            image: null
        });
        const productImage3 = await ProductImage.create({
            productId: product.id,
            image: null
        });
        return res.status(201).json({
            success: true,
            data: product,
            image1: productImage1,
            image2: productImage2,
            image3: productImage3

        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}
const getProductByID = async (req = request, res = response) => {
    try {
        const { id } = req.params;
        const product = await Product.findOne({ 
            where: { id: id },
            include: [{
                model: ProductImage,
                as: 'images',
                required: true // Si quieres que la imagen sea obligatoria para que se devuelva el producto
            }]
        });

        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            });
        }

        return res.status(200).json({
            success: true,
            product: product
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}
/*
const getProductByID = async (req = request, res = response) => {
    try {
        const { id } = req.params;
        const product = await Product.findOne({ where: { id: id } });

        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            });
        }

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}*/
// obtain a first image of a product
const getFirstProductImage = async (req = request, res = response) => {
    try {
        const { id } = req.params;
        const productImage = await ProductImage.findOne({ where: { productId: id } });
        return res.status(200).json({
            success: true,
            data: productImage
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

const getProductsImages = async (req = request, res = response) => {
    try {
        const { id } = req.params;
        const productImages = await ProductImage.findAll({ where: { productId: id } });
        return res.status(200).json({
            success: true,
            data: productImages 
        }); 
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}
// update product images (3 images)
const updateProductImages = async (req = request, res = response) => {
    try {
        const { id, image1, image2, image3 } = req.body;
        const product = await Product.findOne({ where: { id } });
        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            });
        }
        const productImages = await ProductImage.findAll({ where: { productId: id } });
        if (productImages.length === 0) {
            return res.status(404).json({
                success: false,
                message: "Product images not found"
            });
        }
        // Update images
        await ProductImage.update({ image: image1 }, { where: { productId: id, id: productImages[0].id } });
        await ProductImage.update({ image: image2 }, { where: { productId: id, id: productImages[1].id } });
        await ProductImage.update({ image: image3 }, { where: { productId: id, id: productImages[2].id } });
        return res.status(200).json({
            success: true,
            message: "Product images updated"
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

const getProducts = async (req = request, res = response) => {
    try {
        const products = await Product.findAll({ 
            where: { isActive: true },
            include: [{
                model: ProductImage,
                as: 'images',
                required: true // Si quieres que la imagen sea obligatoria para que se devuelva el producto
            }]
         });
        
        return res.status(200).json({
            success: true,
            data: products


        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }

}

const getPictures = async (req = request, res = response) => {
    try {
        const productimages = await ProductImage.findAll();
        return res.status(200).json({
            success: true,
            productimages
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}
const updateProduct = async (req = request, res = response) => {
    try {
        const { id, name, description, price, categoryId } = req.body;
        if (!isAlphaNumericSpaceGuionPunto(name), !isAlphaNumericSpaceGuionPunto(description)) {
            return res.status(400).json({
                success: false,
                message: "Invalid input"
            });
        }
        if (!onlyPositiveIntegers(price)) {
            return res.status(400).json({
                success: false,
                message: "Invalid input"
            });
        }
        const product = await Product.update({ name, description, price, categoryId }, { where: { id } });
        return res.status(200).json({
            success: true,
            data:product
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}
const updateName = async (req, res) => {

    try {
        const { id, name } = req.body;
        if (!isAlphaNumericSpaceGuionPunto(name)) {
            return res.status(400).json({
                success: false,
                message: "Invalid input"
            });
        }
        const product = await Product.update({ name }, { where: { id } });
        return res.status(200).json({
            success: true,
            product
        });

    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

const updatePrice = async (req, res) => {

    try {
        const { id, price } = req.body;
        if (!onlyPositiveIntegers(price)) {
            return res.status(400).json({
                success: false,
                message: "Invalid input"
            });
        }
        const product = await Product.update({ price }, { where: { id } });
        return res.status(200).json({
            success: true,
            product
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });

    }
}

const deactivateProduct = async (req = request, res = response) => {
    try {
        const { id } = req.body;


        await Product.update({ isActive: false }, { where: { id } });
        return res.status(200).json({
            success: true,
            message: "Product deactivated"
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }

}

module.exports = { createProduct,getProductByID,getFirstProductImage, getProductsImages, updateProduct,getProducts, getPictures, updateName, updatePrice, deactivateProduct }

