import { Category } from '../models/categoryModel.js';
import { request, response } from 'express';
import sequelize from 'sequelize';
categoryController = {
    async createCategory(req = request, res = response) {
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
    async getCategories(req = request, res = response) {
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
    }

}

export default categoryController;