const { request, response } = require("express");
const { isAlphaNumericSpaceGuionPunto, onlyPositiveIntegers } = require ("../helpers/utils.js");
// Models
const Product = require("../models/product")
const ProductImage = require("../models/productsimage");

const createProduct = async (req = request, res = response) => {
        try {
            const { name, description, price, categoryid } = req.body;
            if (!isAlphaNumericSpaceGuionPunto(name),!isAlphaNumericSpaceGuionPunto(description)) {
                return res.status(400).json({
                    success: false,
                    message: "Invalid input"
                });
            }

            if(!onlyPositiveIntegers(price)){
                return res.status(400).json({
                    success: false,
                    message: "Invalid input"
                });
            }
            
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
module.exports = { createProduct, getProducts, getPictures }