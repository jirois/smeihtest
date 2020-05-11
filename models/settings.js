const mongoose = require('mongoose');

const settingsSchema = new mongoose.Schema({
    user: {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user'
        },
        required: true
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

const Setting  = mongoose.model('setting', settingsSchema);

module.exports = Setting;