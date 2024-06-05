const { request, response } = require("express");
const { isAlphaNumericSpaceGuionPunto, onlyPositiveIntegers } = require("../helpers/utils.js");

// Models
const Category = require("../models/category");
const Product = require("../models/product");

const createCategory = async (req = request, res = response) => {
    try {
        const { name, description, image } = req.body;
        if (!isAlphaNumericSpaceGuionPunto(name),!isAlphaNumericSpaceGuionPunto(description)) {
            return res.status(400).json({
                success: false,
                message: "Invalid input"
            });
        }
        // Si existe la categoría, la retornamos
        const category = await Category.findOne({ where: { name: name} });

        if (category) {
            return res.status(400).json({
                success: false,
                message: "Category already exists"
            });
        }

        // la descripcion es igual
        const categoryDescription = await Category.findOne({ where: { description: description } });

        if (categoryDescription) {
            return res.status(400).json({
                success: false,
                message: "Description already exists"
            });
        }

        const newCategory = await Category.create(
            {
                name: name,
                description: description,
                image:image,
                isActive: true
            },
            
        );
        return res.status(201).json({
            success: true,
            data: newCategory
        });
    } catch (error) {
        return res.status(500).json({  
            success: false,
            message: error.message
        });

    }
}

const getCategories = async (req = request, res = response) => {
    try {
        const categories = await Category.findAll({ where: { isActive: true } });
        
        if(categories.length === 0) {
            return res.status(404).json({
                success: false,
                data: [],
                message: "No categories found"
            });
        }

        res.status(200).json({
            success: true,
            data: categories
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
            data
        });
    }
}
const deactivateCategory = async (req = request, res = response) => {
    try {
        const { id } = req.body;

        const responseDeleteCategory = await Category.update({ isActive: false }, { where: { id } });

        if (responseDeleteCategory[0] === 0) {
            return res.status(404).json({
                success: false,
                message: "Category not found"
            });
        }
        const deleteCategory = await Category.findByPk(id);

        return res.status(200).json({
            success: true,
            data: deleteCategory,
            message: "Category deleted"
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}
const updateCategory = async (req = request, res = response) => {
    try {
        const { id } = req.params;

        const { name, description } = req.body;

        const responseUpdateCategory = await Category.update({ name: name, description }, { where: { id } });

        if (responseUpdateCategory[0] === 0) {
            return res.status(404).json({
                success: false,
                msg: 'Category not found'
            });
        }

        const updateCategory = await Category.findOne({ where: { name } });

        res.status(201).json({
            success: true,
            data: updateCategory
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error,
            msg: 'Error in server'
        });
    }
}
module.exports = { createCategory, getCategories, deactivateCategory , updateCategory};