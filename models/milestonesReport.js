const mongoose = require('mongoose');

const milestoneReportSchema = new mongoose.Schema({
    milestoneID: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'milestone'
        },
        required: true
    },

    proof: {
        type: String,
        required: true,
        trim: true
    }
}, {
    timestamps: true
})

const milestoneReport = mongoose.model('milestoneReport', milestoneReportSchema);

module.exports = milestoneReport;