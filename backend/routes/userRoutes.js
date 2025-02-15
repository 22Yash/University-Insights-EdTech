// backend/routes/userRoutes.js
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();

// Login user
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    console.log("Received login request:", req.body);

    try {
        // Check if user exists
        const user = await User.findOne({ email });
        console.log("User found in DB:", user);

        if (!user) {
            return res.status(400).json({ msg: 'Invalid credentials (User not found)' });
        }

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        console.log("Password match:", isMatch);

        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid credentials (Wrong password)' });
        }

        // Create JWT token
        const payload = { userId: user.id, role: user.role };
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({ token, role: user.role });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ msg: 'Server error' });
    }
});


module.exports = router;