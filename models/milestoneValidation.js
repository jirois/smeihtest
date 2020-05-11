const mongoose = require('mongoose');

const milestoneValidationSchema = new mongoose.Schema({
    validator: {
        validatorId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user'
        }, 
        required: true
    },

    milestoneReport: {
        milestoneReportId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'milestoneReport'
        },
        required: true
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
})

const milestoneValidation = mongoose.model('milestoneValidation', milestoneValidationSchema);

module.exports = milestoneValidation;