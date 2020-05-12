const mongoose = require('mongoose');

const milestoneReportSchema = new mongoose.Schema({
  milestoneID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'milestone'
  },

  proof: {
    type: String,
    trim: true
  }

}, {
  timestamps: true
});

const milestoneReport = mongoose.model('milestoneReport', milestoneReportSchema);

module.exports = milestoneReport;
