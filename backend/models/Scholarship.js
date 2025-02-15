const mongoose = require('mongoose');

const ScholarshipSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  eligibility: {
    type: String,
    required: true,
  },
  deadline: {
    type: Date,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('Scholarship', ScholarshipSchema);