const mongoose = require('mongoose');

const auditTrailSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },

  activity: {
    type: String,
    trim: true
  }
}, {
  timestamps: true
});

const AuditTrail = mongoose.model('auditTrail', auditTrailSchema);

module.exports = AuditTrail;
