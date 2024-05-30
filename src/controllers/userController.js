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
}

module.exports = { getUsers, putUser,changePassword };