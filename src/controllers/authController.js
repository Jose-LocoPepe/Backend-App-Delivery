const { request, response } = require("express");
const bcryptjs = require("bcryptjs");

// Models
const User = require("../models/user.js");
const Rol = require("../models/rol.js");

// Generate token
const generateJWT = require('../helpers/generate-jws');

const jwt = require("jsonwebtoken");

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
                error: true,
                message: "Credenciales incorrecta"
            });
        }
        if (!bcryptjs.compareSync(password, user.password)) {
            return res.status(400).json({
                success: false,
                error: true,
                message: "Credenciales incorrecta"
            });
        }
        const token = await generateJWT(user.id);
        const Userdata = {
            id: user.id,
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
        const token = await generateJWT(user.id);
        const { id, name, lastname, email, phone, imagen, rol_id } = user;
        const dataUser = { id, name, lastname, email, phone, imagen, rol_id, token };
        return res.status(200).json({
            success: true,
            data: dataUser,
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
const validateToken = async (req = request, res = response) => {
    const authHeader = req.headers['authorization'];

    // Separate the token from the "Bearer" prefix
    token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({
            success: false,
            message: 'Not in token'
        });
    }
    

    try {
        
        const {id} = jwt.verify(token, process.env.SECRET_OR_PRIVATE_KEY);

        const user = await User.findByPk(id);

        const {
            name,
            lastname,
            phone,
            email,
            image,
            role_id
        } = user;

        const dataUser = { id, name, lastname, phone, email, image, role_id, session_token: token };
        
        if (user) {
            return res.status(200).json({
                success: true,
                message: 'Token es valido',
                data: dataUser
            })
        }
    } catch (error) {
        console.log(error);
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({
                success: false,
                message: 'Token expirado',
                expired: true,
                error
            });
        }
        return res.status(401).json({
            success: false,
            message: 'Token Invalido',
            error
        });
    }
}

module.exports = { register, login, validateToken };