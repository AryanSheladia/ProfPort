const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// POST /api/contact - Create a new contact message
router.post('/', async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json({ message: 'Contact message sent successfully', data: contact });
  } catch (error) {
    console.error('Error creating contact message:', error);
    if (error.name === 'ValidationError') {
      return res.status(400).json({ message: 'Validation error', errors: error.errors });
    }
    res.status(500).json({ message: 'Internal server error' });
  }
});

// GET /api/contact - Get all contact messages (for admin purposes)
router.get('/', async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (error) {
    console.error('Error fetching contact messages:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;