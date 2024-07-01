//manages the location data using open street maps
const axios = require('axios');

const getLocation = async (req, res) => {
    try {
        const { address } = req.body;
        const response = await axios.get(`https://nominatim.openstreetmap.org/search?q=${address}&format=json`);

        return res.status(200).json({
            success: true,
            data: response.data,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}


module.exports = {
    getLocation,
};