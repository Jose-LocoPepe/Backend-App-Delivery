import User from "../models/user";

/*
    static id;
    static name;
    static lastname;
    static email;
    static phone;
    static password;
    static imagen;
}*/

const userController = {
    createUser: async(req, res) => {
        try {
            const { name, lastname, email, phone, password, imagen } = req.body;
            const user = await User.create({
                name,
                lastname,
                email,
                phone,
                password,
                imagen
            });
            return res.status(201).json({
                success: true,
                user
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message
            });
        }
    },
    getUsers: async(req, res) => {
        try {
            const users = await User.findAll();
            return res.status(200).json({
                success: true,
                users
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message
            });
        }
    },
    deleteUser: async(req, res) => {
        try {
            const { id } = req.params;
            const user = await User.destroy({
                where: {
                    id
                }
            });
            return res.status(200).json({
                success: true,
                message: "User deleted"
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message
            });
        }
    }
}

export default userController;