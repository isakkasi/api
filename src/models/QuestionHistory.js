const { model, Schema, Types } = require('mongoose');

const {DB} = require('../config/db')

const currentDb = mongoose.connection.useDb(DB)

const questionHistorySchema = new Schema(
    {
        _questionId: {
            type: Types.ObjectId,
            ref: 'Question',
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

const QuestionHistory = currentDb.model('QuestionHistory', questionHistorySchema);

module.exports = QuestionHistory;
