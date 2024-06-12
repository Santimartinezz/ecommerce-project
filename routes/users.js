const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/register', async (req, res) => {
    const newUser = new User(req.body);
    await newUser.save();
    res.send('Usuario registrado');
});

router.post('/login', async (req, res) => {
    const user = await User.findOne({ username: req.body.username, password: req.body.password });
    if (user) {
        res.send(user);
    } else {
        res.status(401).send('Usuario o contraseña incorrectos');
    }
});

module.exports = router;
