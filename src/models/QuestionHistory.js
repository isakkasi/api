const { model, Schema, Types } = require('mongoose');

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

const QuestionHistory = model('QuestionHistory', questionHistorySchema);

module.exports = QuestionHistory;
