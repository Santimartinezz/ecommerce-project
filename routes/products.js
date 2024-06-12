const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

router.get('/', async (req, res) => {
    const products = await Product.find();
    res.send(products);
});

router.post('/', async (req, res) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.send('Producto creado');
});

router.put('/:id', async (req, res) => {
    await Product.findByIdAndUpdate(req.params.id, req.body);
    res.send('Producto actualizado');
});

router.delete('/:id', async (req, res) => {
    await Product.findByIdAndDelete(req.params.id);
    res.send('Producto eliminado');
});

module.exports = router;
