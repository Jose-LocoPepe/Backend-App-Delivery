const { request, response } = require("express");
const Address = require( "../models/address");
const User = require("../models/user");

const createAddress = async (req = request, res = response) => {
    try {
        const { id } = req.params;
        const { name, street, neighborhood, longitude, latitude } = req.body;
        const user = await User.findOne({ where: { id: id } });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "Usuario no encontrado"
            });
        }

        const newAddress = await Address.create({
            name: name,
            street: street,
            neighborhood: neighborhood,
            longitude: longitude,
            latitude: latitude,
            user_id: user.id
        });

        return res.status(201).json({
            success: true,
            data: newAddress,
            message: "Dirección creada correctamente"
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
