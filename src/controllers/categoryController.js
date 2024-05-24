
const Category = require('../models/category');

const { request, response } = require("express");
const sequelize = require('sequelize');


const categoryController = {
    async createCategory(req, res) {
        try {
          const { name, description } = req.body;
          
          const category = await Category.create({
            name,
            description,
            
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
       const { name, description } = req.body;
       const { id } = req.params;
        try {
            if(!id || !name || !description){
                return res.status(401).json({
                    success: false,
                    message: "Los campos son obligatorios"
                });
            }
            const category = await Category.update({
                name,
                description
            }, {
                where: {
                    id
                }
            });
        }catch{
            return res.status(500).json({
                success: false,
                message: error.message
            });
        }
    }
        ,
    
async deleteCategory(req, res) {
    const { id } = req.params;
    
    try {
        if (!id) {
            return res.status(400).json({
                success: false,
                message: "El id es obligatorio"
            });
        }
        
        const category = await Category.findOne({ where: { id } });
        
        if (!category) {
            return res.status(404).json({
                success: false,
                message: "Category not found"
            });
        }
        
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
}


    
  
};

module.exports = categoryController;

