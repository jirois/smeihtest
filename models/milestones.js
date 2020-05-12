const mongoose = require('mongoose');

const milestonesSchema = new mongoose.Schema({
  businessID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'business'
  },

  milestone: {
    type: String,
    trim: true,
    required: true
  },

  description: {
    type: String,
    required: true,
    trim: true
  },

  expectedTimeline: {
    type: Number,
    default: 0
  },

  milestoneAmount: {
    type: Number,
    default: 0
  }

}, {
  timestamps: true
});

const Milestone = mongoose.model('milestone', milestonesSchema);

module.exports = Milestone;
