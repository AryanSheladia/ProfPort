const mongoose = require('mongoose');

const consultancySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
    maxlength: 100
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
  },
  organization: {
    type: String,
    trim: true,
    maxlength: 120
  },
  service: {
    type: String,
    required: true,
    enum: ['corporate', 'startup', 'academic', 'keynote']
  },
  date: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true,
    enum: ['09:30', '11:00', '14:00', '16:00']
  },
  notes: {
    type: String,
    trim: true,
    maxlength: 1000
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Consultancy', consultancySchema);