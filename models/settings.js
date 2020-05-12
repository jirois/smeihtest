const mongoose = require('mongoose');

const settingsSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },

  optionKey: {
    type: String,
    required: true
  },

  value: {
    type: String
  }

}, {
  timestamps: true
});

const Setting = mongoose.model('setting', settingsSchema);

module.exports = Setting;
