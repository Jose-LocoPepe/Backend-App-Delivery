//import { Category } from '../models/categoryModel.js';
//import { request, response } from 'express';

const { request, response } = require("express");
const { isAlphaNumericSpaceGuionPunto, onlyPositiveIntegers } = require ("../helpers/utils.js");


// Models
const Category = require("../models/category")

//import sequelize from 'sequelize';
categoryController = {
    createCategory: async(req = request, res = response) => {
    try {
            const { name, description} = req.body;

            if (!isAlphaNumericSpaceGuionPunto(name),!isAlphaNumericSpaceGuionPunto(description)) {
                return res.status(400).json({
                    success: false,
                    message: "Invalid input"
                });
            }
            const category = await Category.create({
                name,
                description
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
            const { id } = req.body;
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