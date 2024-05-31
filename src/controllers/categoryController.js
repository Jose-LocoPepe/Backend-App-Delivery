const { request, response } = require("express");
//const { isAlphaNumericSpaceGuionPunto, onlyPositiveIntegers } = require("../helpers/utils.js");

// Models
const Category = require("../models/category");
const Product = require("../models/product");

const categoryController = {
    createCategory: async (req = request, res = response) => {
        try {
            const { name, description } = req.body;

          /*  if (!isAlphaNumericSpaceGuionPunto(name) || !isAlphaNumericSpaceGuionPunto(description)) {
                return res.status(400).json({
                    success: false,
                    message: "Invalid input"
                });
            }
*/

            console.log(req.body);
            const category = await Category.create({
                name: name,
                description: description            
            });
            console.log(category);
            return res.status(201).json({
                success: true,
                category
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message
            });
        }
    },
    getCategory: async (req = request, res = response) => {
        try {
            const categories = await Category.findAll();
            return res.status(200).json({
                success: true,
                categories
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message
            });
        }
    },
    deleteCategory: async (req = request, res = response) => {
        try {
            const { id } = req.body;
            await Category.destroy({
                where: {
                    id
                }
            });
            return res.status(200).json({
                success: true,
                message: "Category deleted"
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message
            });
        }
    },
    deactivateCategory: async (req = request, res = response) => {
        try {
            const { id } = req.body;
            const productList = await Product.findAll({ where: { categoryId: id } });

            for (let i = 0; i < productList.length; i++) {
                productList[i].isActive = false;
                await productList[i].save();
            }

            await Category.update({ isActive: false }, { where: { id } });
            return res.status(200).json({
                success: true,
                message: "Category deactivated"
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message
            });
        }
    }
}

module.exports = categoryController;
