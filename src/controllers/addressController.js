import Address from "../models/address.js";
import sequelize from "sequelize";


const adressController = {
    async createAdress(req, res) {
        try {
            const { userId, address, street, complement, reference } = req.body;
            const new_adress = await Address.create({
                userId,
                address,
                street,
                complement,
                reference
            });
            return res.status(201).json({
                success: true,
                new_adress
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message
            });
        }
    },
    async getAddress(req, res) {
        
        try {
            const adress = await Address.findAll();
            return res.status(200).json({
                success: true,
                adress
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message
            });
        }
    },
    
};

export default addressController;