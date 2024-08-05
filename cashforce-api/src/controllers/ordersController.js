const { Order, Buyer, Provider, Cnpj, User, Offer, Sponsor } = require('../models');

// Obter todos os pedidos
const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.findAll({
            include: [
                { model: Buyer, as: 'buyer' },
                { model: Provider, as: 'provider' },
                { model: Cnpj },
                { model: User },
                {
                    model: Offer, as: 'offers',
                    include: [{ model: Sponsor, as: 'sponsor' }]
                },

            ],
        });
        console.log(orders);
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Obter pedido por ID
const getOrderById = async (req, res) => {
    try {
        const { id } = req.params;
        const order = await Order.findByPk(id, {
            include: [
                { model: Buyer, as: 'buyer' },
                { model: Provider, as: 'provider' },
                { model: Cnpj },
                { model: User },
                {
                    model: Offer,
                    as: 'offers',
                    include: [{ model: Sponsor, as: 'sponsor' }]
                }


            ],
        });
        if (order) {
            res.status(200).json(order);
        } else {
            res.status(404).json({ error: 'Pedido não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Criar novo pedido
const createOrder = async (req, res) => {
    try {
        const order = await Order.create(req.body);
        res.status(201).json(order);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Atualizar pedido por ID
const updateOrderById = async (req, res) => {
    try {
        const { id } = req.params;
        const [updated] = await Order.update(req.body, {
            where: { id: id },
        });
        if (updated) {
            const updatedOrder = await Order.findByPk(id, {
                include: [
                    { model: Buyer, as: 'buyer' },
                    { model: Provider, as: 'provider' },
                    { model: Cnpj },
                    { model: User },
                ],
            });
            res.status(200).json(updatedOrder);
        } else {
            res.status(404).json({ error: 'Pedido não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Excluir pedido por ID
const deleteOrderById = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Order.destroy({
            where: { id: id },
        });
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).json({ error: 'Pedido não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllOrders,
    getOrderById,
    createOrder,
    updateOrderById,
    deleteOrderById,
};
