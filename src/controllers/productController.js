const { request, response } = require("express");

// Models
const Product = require("../models/product")
const ProductImage = require("../models/productsimage");

const createProduct = async (req = request, res = response) => {
        try {
            const { name, description, price, categoryid } = req.body;
            const product = await Product.create({
                name,
                description,
                price,
                categoryid
            });
            return res.status(201).json({
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
const getProducts = async(req = request, res = response) => {
        try {
            const products = await Product.findAll();
            return res.status(200).json({
                success: true,
                products
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message
            });
        }
    }
const getPictures = async(req = request, res = response) => {
        try {
            const products = await ProductImage.findAll();
            return res.status(200).json({
                success: true,
                products
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message
            });
        }
    }
module.exports = { createProduct, getProducts, getPictures }