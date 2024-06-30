import Payment from '../models/payment.js';
import Stripe from 'stripe';
const stripe = new Stripe('your_stripe_secret_key'); // Replace with your Stripe secret key

const paymentController = {
    submitPayment: async (req, res) => {
        try {
            const { paymentMethodId, amount, currency, orderId } = req.body;

            // Create a payment intent with Stripe
            const paymentIntent = await stripe.paymentIntents.create({
                amount,
                currency,
                payment_method: paymentMethodId,
                confirm: true,
            });

            // Save payment details in your database
            const payment = await Payment.create({
                paymentMethod: paymentIntent.payment_method,
                paymentStatus: paymentIntent.status,
                orderId,
            });

            return res.status(201).json({
                success: true,
                payment,
                clientSecret: paymentIntent.client_secret,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    },
    getPaymentMethod: async (req, res) => {
        try {
            const payments = await Payment.findAll();
            return res.status(200).json({
                success: true,
                payments,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    },
    getPaymentStatus: async (req, res) => {
        try {
            const payments = await Payment.findAll();
            return res.status(200).json({
                success: true,
                payments,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    },
};

export default paymentController;
