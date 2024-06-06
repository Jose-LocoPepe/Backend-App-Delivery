const { request, response } = require("express");
const { isAlphaNumericSpaceGuionPunto, onlyPositiveIntegers } = require("../helpers/utils.js");
// Models
const Product = require("../models/product")
const ProductImage = require("../models/productsimage");

const createProduct = async (req = request, res = response) => {
    try {
        const { name, description, price, categoryId } = req.body;

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
const getProducts = async (req = request, res = response) => {
    try {
        const products = await Product.findAll({ where: { isActive: true } });
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
const updateImage = async (req, res) => {
    try {
        const { id, image } = req.body;
        const product = await Product.update({ image }, { where: { id } });
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

module.exports = { createProduct, getProducts, getPictures, updateName, updatePrice, updateImage, deactivateProduct }