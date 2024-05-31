const Request = require('../models/request.js');
/*
class Request extends Model {
    static id;
    static clientId;
    static adressId;
    static requestDate;
    static status;
    static totalPrice;
} */
const requestController = {

    createRequest: async (req, res) => {
        try {
            const { clientId, adressId, requestDate, status, totalPrice } = req.body;
            const request = await Request.create({
                clientId,
                adressId,
                requestDate,
                status,
                totalPrice
            });
            return res.status(201).json({
                success: true,
                request
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message
            });
        }
    },
    getRequest: async (req, res) => {
        try {
            const requests = await Request.findAll();
            return res.status(200).json({
                success: true,
                requests
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message
            });
        }
    },
    updateRequest: async (req, res) => {
        try {
            const { id } = req.params;
            const { clientId, adressId: addressId, requestDate, status, totalPrice } = req.body;
            const request = await Request.update({
                clientId,
                addressId: addressId,
                requestDate,
                status,
                totalPrice
            }, {
                where: {
                    id
                }
            });
            return res.status(200).json({
                success: true,
                message: "Request updated"
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message
            });
        }
    },
    deleteRequest: async (req, res) => {
        try {
            const { id } = req.params;
            const request = await Request.destroy({
                where: {
                    id
                }
            });
            return res.status(200).json({
                success: true,
                message: "Request deleted"
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message
            });
        }
    }
};

export default requestController;