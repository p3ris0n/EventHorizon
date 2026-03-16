const mongoose = require('mongoose');

const triggerSchema = new mongoose.Schema({
    contractId: {
        type: String,
        required: true,
        index: true
    },
    eventName: {
        type: String,
        required: true
    },
    actionType: {
        type: String,
        enum: ['webhook', 'discord', 'email'],
        default: 'webhook'
    },
    actionUrl: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    },
    lastPolledLedger: {
        type: Number,
        default: 0
    }
}, { timestamps: true });

module.exports = mongoose.model('Trigger', triggerSchema);
