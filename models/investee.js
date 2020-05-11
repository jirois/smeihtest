const mongoose = require('mongoose');

const investeeSchema = new mongoose.Schema({
    user: {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user'
        },
        required: true
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
})

const Investee = mongoose.model('investee', investeeSchema);

module.exports = Investee;