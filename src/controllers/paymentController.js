import Payment from '../models/payment.js';
import sequelize from 'sequelize';

const paymentController = {
    submitPayment: async(req, res) => {
        try {
            const { paymentMethod, paymentStatus, orderId } = req.body;
            const payment = await Payment.create({
                paymentMethod,
                paymentStatus,
                orderId
            });
            return res.status(201).json({
                success: true,
                payment
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message
            });
        }
    },
     getPaymentMethod: async(req, res) => {
        try {
            const payments = await Payment.findAll();
            return res.status(200).json({
                success: true,
                payments
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message
            });
        }
    },

}