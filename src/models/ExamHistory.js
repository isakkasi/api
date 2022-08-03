const { model, Schema, Types, mongoose } = require('mongoose');

// const {DB} = require('../config/db')

// const currentDb = mongoose.connection.useDb(DB)

const examHistorySchema = new Schema(
    {
        _examId: {
            type: Types.ObjectId,
            ref: 'Exam',
        },
        dateTime: {
            type: Date,
        },
        action: {
            type: String,
        },
        currentValue: {
            type: String,
        },

        actionBy: {
            type: Types.ObjectId,
            ref: 'User',
        },
    },
    {
        timestamps: true,
    }
);

const ExamHistory = model('ExamHistory', examHistorySchema);

module.exports = ExamHistory;
