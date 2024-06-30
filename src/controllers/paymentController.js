import Payment from '../models/payment.js';
import Stripe from 'stripe';
const stripe = new Stripe('tu_stripe_secret_key'); // Reemplaza con tu clave secreta de Stripe

const paymentController = {
    submitPayment: async (req, res) => {
        try {
            const { paymentMethodId, amount, currency, orderId } = req.body;

            // Crear una intención de pago con Stripe
            const paymentIntent = await stripe.paymentIntents.create({
                amount,
                currency,
                payment_method: paymentMethodId,
                confirm: true,
            });

            // Guardar detalles del pago en la base de datos
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
            if (error.type === 'StripeCardError') {
                // Error con la tarjeta (fondos insuficientes, tarjeta rechazada, etc.)
                return res.status(400).json({
                    success: false,
                    message: error.message,
                });
            } else if (error.type === 'StripeInvalidRequestError') {
                // Error en la solicitud (parámetros inválidos, etc.)
                return res.status(400).json({
                    success: false,
                    message: error.message,
                });
            } else if (error.type === 'StripeAPIError') {
                // Error con la API de Stripe (problemas de red, etc.)
                return res.status(500).json({
                    success: false,
                    message: 'Error con la API de Stripe. Por favor, inténtelo de nuevo más tarde.',
                });
            } else if (error.type === 'StripeConnectionError') {
                // Error de conexión con Stripe
                return res.status(502).json({
                    success: false,
                    message: 'Error de conexión con Stripe. Por favor, inténtelo de nuevo más tarde.',
                });
            } else if (error.type === 'StripeAuthenticationError') {
                // Error de autenticación (clave secreta incorrecta, etc.)
                return res.status(401).json({
                    success: false,
                    message: 'Error de autenticación con Stripe.',
                });
            } else {
                // Cualquier otro error
                return res.status(500).json({
                    success: false,
                    message: 'Ocurrió un error. Por favor, inténtelo de nuevo más tarde.',
                });
            }
        }
    },
    getPaymentStatus: async (req, res) => {
        try {
            const { paymentId } = req.params;
            const payment = await Payment.findOne({ where: { id: paymentId } });

            if (!payment) {
                return res.status(404).json({
                    success: false,
                    message: 'Pago no encontrado',
                });
            }

            // Consultar el estado del pago en Stripe
            const paymentIntent = await stripe.paymentIntents.retrieve(payment.paymentMethod);

            return res.status(200).json({
                success: true,
                paymentStatus: paymentIntent.status,
            });
        } catch (error) {
            if (error.type === 'StripeInvalidRequestError') {
                // Error en la solicitud (parámetros inválidos, etc.)
                return res.status(400).json({
                    success: false,
                    message: error.message,
                });
            } else if (error.type === 'StripeAPIError') {
                // Error con la API de Stripe (problemas de red, etc.)
                return res.status(500).json({
                    success: false,
                    message: 'Error con la API de Stripe. Por favor, inténtelo de nuevo más tarde.',
                });
            } else if (error.type === 'StripeConnectionError') {
                // Error de conexión con Stripe
                return res.status(502).json({
                    success: false,
                    message: 'Error de conexión con Stripe. Por favor, inténtelo de nuevo más tarde.',
                });
            } else if (error.type === 'StripeAuthenticationError') {
                // Error de autenticación (clave secreta incorrecta, etc.)
                return res.status(401).json({
                    success: false,
                    message: 'Error de autenticación con Stripe.',
                });
            } else {
                // Cualquier otro error
                return res.status(500).json({
                    success: false,
                    message: 'Ocurrió un error. Por favor, inténtelo de nuevo más tarde.',
                });
            }
        }
    },
};

export default paymentController;
