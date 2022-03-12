const mongoose = require('../database');

const ReportSchema = new mongoose.Schema({
    idGamersClubPlayer: {
        type: String
    },
    reason: {
        type: String,
        require: true
    },
    match: {
        type: String
    },
    idSpy: {
        type: String
    },
    created_at: {
        type: Date,
        require: true,
        default: Date.now
    },
},
    {
        versionKey: false
    }
)

const report = mongoose.model('report', ReportSchema, 'report');

module.exports = report;