const { request, response } = require("express");
const Address = require( "../models/address");
const User = require("../models/user");

const createAddress = async (req = request, res = response) => {
    try {
        const { userID }= req.params;

        const { name, street, neighborhood, longitude, latitude } = req.body;
        
        const newAddress = await Address.create({
            name,
            street,
            neighborhood,
            longitude,
            latitude
        });

        // Asociar la dirección al usuario
        const user = await User.findByPk(userID);
        await newAddress.setUser(user);

        


        return res.status(201).json({
            success: true,
            data: newAddress
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

const getAddress = async (req = request, res = response) => {
    try {
        const address = await Address.findAll();
        return res.status(200).json({
            success: true,
            address
        });
    }
    catch (error) {
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
