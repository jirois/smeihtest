const mongoose = require('mongoose');

const investeeSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },

  mobileNumber: {
    type: Number,
    required: true,
    trim: true
  },

  companyName: {
    type: String,
    required: true,
    trim: true
  },

  Address: {
    type: String,
    required: true,
    trim: true
  }

}, {
  timestamps: true
});

const Investee = mongoose.model('investee', investeeSchema);

module.exports = Investee;
