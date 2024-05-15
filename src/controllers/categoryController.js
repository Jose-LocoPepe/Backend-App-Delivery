const Category = require('../models/category');

const { request, response } = require("express");
const sequelize = require('sequelize');
categoryController = {
    async createCategory(req, res) {
    try {
            const { name, description, image } = req.body;
            const category = await Category.create({
                name,
                description,
                image
            });
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
   async getCategory(req, res) {
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
   async updateCategory(req, res) {
        try {
            const { id } = req.params;
            const category = await Category.destroy({
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
    }
}

module.exports = categoryController;