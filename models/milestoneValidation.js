const mongoose = require('mongoose');

const milestoneValidationSchema = new mongoose.Schema({
  validator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },

  milestoneReport: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'milestoneReport'
  },

  remark: {
    type: String,
    trim: true
  },

  verdict: {
    type: Number,
    default: 0
  }

}, {
  timestamps: true
});

const milestoneValidation = mongoose.model('milestoneValidation', milestoneValidationSchema);

module.exports = milestoneValidation;
