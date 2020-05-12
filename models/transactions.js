const mongoose = require('mongoose');

const transactionsSchema = new mongoose.Schema({
  transactionId: {
    type: Number,
    unique: true
  },

  businessId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'business'
  },

  investorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Investor'
  },

  amount: {
    type: Number,
    default: 0
  },

  blockchainWallet: {
    type: String,
    trim: true
  }

}, {
  timestamps: true
});

const Transaction = mongoose.model('transaction', transactionsSchema);

module.exports = Transaction;
