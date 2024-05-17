const { request, response } = require("express");

const User = require("../models/user");

const getUsers = async (req = request, res = response) => {
}
const putUser = async (req = request, res = response) => {
    const { id } = req.params;

    const { name, lastname, phone } = req.body;

    const responseUpdate = await User.update({ name, lastname, phone }, { where: { id: id } });

    const UserFront = await User.findOne({ where: { id: id } });

    console.log(responseUpdate);
    return res.status(200).json({
        success: true,
        data: UserFront,
        message: "Usuario actualizado correctamente"
    });
}


const changePassword = async (req = request, res = response) => {
    const { id } = req.params;
    const { newPassword } = req.body;

    try {
        const user = await User.findOne({ where: { id: id } });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "Usuario no encontrado"
            });
        }

        user.password = newPassword; // Asegúrate de que la contraseña esté siendo hasheada antes de guardarla.
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
};


module.exports = { getUsers, putUser,changePassword };
