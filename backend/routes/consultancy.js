const express = require('express');
const router = express.Router();
const Consultancy = require('../models/Consultancy');

// POST /api/consultancy - Create a new consultancy booking
router.post('/', async (req, res) => {
  try {
    const consultancy = new Consultancy(req.body);
    await consultancy.save();
    res.status(201).json({ message: 'Consultancy booking created successfully', data: consultancy });
  } catch (error) {
    console.error('Error creating consultancy booking:', error);
    if (error.name === 'ValidationError') {
      return res.status(400).json({ message: 'Validation error', errors: error.errors });
    }
    res.status(500).json({ message: 'Internal server error' });
  }
});

// GET /api/consultancy - Get all consultancy bookings (for admin purposes)
router.get('/', async (req, res) => {
  try {
    const bookings = await Consultancy.find().sort({ createdAt: -1 });
    res.json(bookings);
  } catch (error) {
    console.error('Error fetching consultancy bookings:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;