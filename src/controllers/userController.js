const { request, response } = require("express");
const bcryptjs = require("bcryptjs");

const User = require("../models/user");

const getUsers = async (req = request, res = response) => {
}
const putUser = async (req = request, res = response) => {
    const { id } = req.params;

    const { name, lastName, phone } = req.body;

    const responseUpdate = await User.update({ name, lastName, phone }, { where: { id: id } });

    const UserFront = await User.findOne({ where: { id: id } });

    console.log(responseUpdate);
    return res.status(200).json({
        success: true,
        data: UserFront,
        message: "Usuario actualizado correctamente"
    });
}


const changePassword = async (req = request, res = response) => {
    try {
        const { id } = req.params;
        const { currentPassword, newPassword } = req.body;
        const user = await User.findOne({ where: { id: id } });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "Usuario no encontrado"
            });
        }

        if (!bcryptjs.compareSync(currentPassword, user.password)) {
            return res.status(400).json({
                success: false,
                error: true,
                message: "Credencial incorrecta"
            });
        }

        // Encriptamos la nueva contraseña
        const salt = bcryptjs.genSaltSync(10);
        user.password = bcryptjs.hashSync(newPassword, salt);

        // Guardamos el usuario con la nueva contraseña
        await user.save();

        return res.status(200).json({
            success: true,
            message: "Contraseña cambiada correctamente"
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Error al cambiar la contraseña"
        });
    }
}

const getDeliveryUsers = async (req = request, res = response) => {
    try {
        const users = await User.findAll({
            where: {
                rol_id: 2
            }
        });

        // Check if users exist
        if (users.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No se encontraron usuarios con el rol de repartidor"
            });
        }

        return res.status(200).json({
            success: true,
            data: users
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Error al obtener los repartidores"
        });
    }
}


module.exports = { getUsers, putUser,changePassword, getDeliveryUsers};