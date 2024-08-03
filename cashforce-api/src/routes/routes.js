const express = require('express');
const ordersController = require('../controllers/ordersController');


const router = express.Router();

router.get('/orders', ordersController.getAllOrders);
router.post('/orders', ordersController.createOrder);
router.get('/orders/:id', ordersController.getOrderById);
router.put('/orders/:id', ordersController.updateOrder);
router.delete('/orders/:id', ordersController.deleteOrder);


module.exports = router;
