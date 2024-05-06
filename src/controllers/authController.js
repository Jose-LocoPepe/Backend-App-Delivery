const { request, response } = require("express");
const bcryptjs = require("bcryptjs");

// Models
const User = require("../models/user.js");
const Rol = require("../models/rol.js");

// Generate token
const generateJWT = require('../helpers/generate-jws');

/**
 * Logs in a user.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} The response object.
 */
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email: email } });

        if (!user) {
            return res.status(400).json({
                success: false,
                message: "El usuario no existe"
            });
        }
        if (!bcryptjs.compareSync(password, user.password)) {
            return res.status(400).json({
                success: false,
                message: "Credenciales incorrecta"
            });
        }
        const token = await generateJWT(user.id);
        const Userdata = {
            name: user.name,
            lastname: user.lastname,
            email: user.email,
            phone: user.phone,
            imagen: user.imagen,
            rol_id: JSON.parse(user.rol_id),
            session_token: token

        }
        return res.status(200).json({
            success: true,
            data:Userdata,
            message: 'Usuario logueado correctamente',

        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error al intentar loguear"
        });
    }
}


const register = async (req = request, res = response) => {
    try {
        const Userdata = req.body;
    
        // Obtenemos el rol del user

        
       
        const rol = await Rol.findOne({ where: { name: 'CLIENTE' } });
        if (!rol) {
            return res.status(404).json({
                success: false,
                message: "Rol no encontrado"
            });
        }

        Userdata['rol_id'] = rol.id;

        // crea el user en la base de datos
        const user = new User(Userdata);
        const salt = bcryptjs.genSaltSync(10);
        user.password = bcryptjs.hashSync(Userdata.password, salt);

        await user.save();
        return res.status(200).json({
            success: true,
            data: Userdata,
            message: `Usuario registrado correctamente`

        });
    } catch (error) {
        console.error('Registration error:', error);
        return res.status(500).json({
            
            success: false,
            message: "Error al intentar crear el usuario"
        });
        
    }
}


module.exports = { register, login };