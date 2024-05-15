import { Category } from '../models/categoryModel.js';
//import { request, response } from 'express';

const { request, response } = require("express");

// Models
const Category = require("../models/category")

import sequelize from 'sequelize';
categoryController = {
    createCategory: async(req = request, res = response) => {
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
    getCategory: async(req = request, res = response) => {
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
    deleteCategory: async(req = request, res = response) => {
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

//module.exports = { createCategory, getCategory, deleteCategory }
module.exports = categoryController