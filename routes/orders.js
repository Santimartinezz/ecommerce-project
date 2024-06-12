const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

router.post('/', async (req, res) => {
    const newOrder = new Order(req.body);
    await newOrder.save();
    res.send('Orden creada');
});

router.get('/', async (req, res) => {
    const orders = await Order.find().populate('userId').populate('products.productId');
    res.send(orders);
});

router.put('/:id', async (req, res) => {
    await Order.findByIdAndUpdate(req.params.id, req.body);
    res.send('Orden actualizada');
});

module.exports = router;
