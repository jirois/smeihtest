const mongoose = require('mongoose');

const ideasSchema = new mongoose.Schema({
  investeeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'investee'
},

  businessTitle: {
    type: String,
    trim: true,
    required: true,
    maxlength: 30
  },

  businessDescription: {
    type: String,
    trim: true
  },

  businessCategory: {
    type: String,
    trim: true,
    required: true
  },

  preferredLocation: {
    type: String,
    trim: true
  },

  requiredAmount: {
    type: Number,
    trim: true,
    default: 0
  },

  mediaURLs: [{
    type: String,
    required: true,
    trim: true
  }],

  videoURL: {
    type: String,
    trim: true
  },

  status: {
    type: String,
    trim: true,
    default: 'pending'
  },

  goal: {
    type: String,
    trim: true
  },

  deadline: {
    type: Date,
  },

  validated: {
    type: Boolean,
    default: false
  }
    
}, {
  timestamps: true
});

const Business = mongoose.model('business', ideasSchema);

module.exports = Business;
