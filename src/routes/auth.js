const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');

// Sign-up route
router.get('/signup', (req, res) => {
    res.render('signup');
});

router.post('/signup', async (req, res) => {
    const { username, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, password: hashedPassword });
        await newUser.save();
        res.redirect('/auth/login');
    } catch (error) {
        res.status(500).send('Error creating user');
    }
});

// Login route
router.get('/login', (req, res) => {
    res.render('login');
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        if (user && await bcrypt.compare(password, user.password)) {
            res.send('Login successful');
        } else {
            res.status(400).send('Invalid credentials');
        }
    } catch (error) {
        res.status(500).send('Error logging in');
    }
});

module.exports = router;
