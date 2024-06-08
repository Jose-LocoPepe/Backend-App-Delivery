const { request, response } = require("express");
const Address = require( "../models/address");
const User = require("../models/user");

const createAddress = async (req = request, res = response) => {
    try {
        const { id }= req.params;

        const { name, street, neighborhood, longitude, latitude } = req.body;
        
        const newAddress = await Address.create({
            name,
            street,
            neighborhood,
            longitude,
            latitude
        });


        return res.status(201).json({
            success: true,
            data: newAddress
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: error.message
            
        });
    }
}

const getAddress = async (req = request, res = response) => {
    try {
        const { id } = req.params;
        const user = await User.findByPk(id, {
            include: {
                model: Address
            }
        });

        return res.status(200).json({
            success: true,
            data: user.Addresses
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

module.exports = {
    createAddress,
    getAddress
}
