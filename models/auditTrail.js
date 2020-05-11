const mongoose = require('mongoose');

const auditTrailSchema = new mongoose.Schema({
    user: {
        userdId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user'
        }
    },

    activity: {
        type: String,
        trim: true
    }
}, {
    timestamps: true
})