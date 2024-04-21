import Rol from '../models/rol.js';

const rolController = {
    
  getRoles: async (req, res) => {
        try {
            const roles = await Rol.findAll();
            return res.status(200).json({
                success: true,
                roles
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message
            });
        }
    },

}
export default rolController;