//import Product from "../models/product.js";
//import sequelize from "sequelize";
const sequelize = require('sequelize');
const Product = require('../models/product.js');
const productController = {
    async createProduct(req, res) {
        try {
            const { name, description, price, image, categoryId } = req.body;
            const product = await Product.create({
                name,
                description,
                price,
                image,
                categoryId
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
    },
    async getProducts(req, res) {
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
    },
    
}

module.exports = productController;