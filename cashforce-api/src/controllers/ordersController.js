const { Order, User, Buyer, Provider, Cnpj } = require('../models');

const ordersController = {
    getAllOrders: async (req, res) => {
        try {
            const orders = await Order.findAll({
                include: [
                    { model: User, attributes: ['id', 'name'] },
                    { model: Buyer, attributes: ['id', 'name'] },
                    { model: Provider, attributes: ['id', 'name'] },
                    { model: Cnpj, attributes: ['id', 'name'] }
                ]
            });
            res.status(200).json(orders);
        } catch (error) {
            res.status(500).json({ error: 'Failed to retrieve orders' });
        }
    },

    createOrder: async (req, res) => {
        try {
            const order = await Order.create(req.body);
            res.status(201).json(order);
        } catch (error) {
            res.status(500).json({ error: 'Failed to create order' });
        }
    },

    getOrderById: async (req, res) => {
        try {
            const order = await Order.findByPk(req.params.id);
            if (order) {
                res.status(200).json(order);
            } else {
                res.status(404).json({ error: 'Order not found' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Failed to retrieve order' });
        }
    },

    updateOrder: async (req, res) => {
        try {
            const [updated] = await Order.update(req.body, {
                where: { id: req.params.id }
            });
            if (updated) {
                const updatedOrder = await Order.findByPk(req.params.id);
                res.status(200).json(updatedOrder);
            } else {
                res.status(404).json({ error: 'Order not found' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Failed to update order' });
        }
    },

    deleteOrder: async (req, res) => {
        try {
            const deleted = await Order.destroy({
                where: { id: req.params.id }
            });
            if (deleted) {
                res.status(204).json();
            } else {
                res.status(404).json({ error: 'Order not found' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Failed to delete order' });
        }
    }
};

module.exports = ordersController;
