const express = require('express');
const Scholarship = require('../models/Scholarship');
const router = express.Router();

// Get all scholarships
router.get('/', async (req, res) => {
  try {
    const scholarships = await Scholarship.find();
    res.json(scholarships);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Search scholarships by name
router.get('/search', async (req, res) => {
  const { query } = req.query;
  try {
    const scholarships = await Scholarship.find({ name: { $regex: query, $options: 'i' } });
    res.json(scholarships);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;