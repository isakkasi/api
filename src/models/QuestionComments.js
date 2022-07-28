const { model, Schema, Types } = require('mongoose');

const questionCommentsSchema = new Schema(
    {
        questionId: {
            type: Types.ObjectId,
            ref: 'Question',
        },
        comment: {
            type: String,
            required: true,
        },
        author: {
            type: Types.ObjectId,
            ref: 'User',
        },
    },

    {
        timestamps: true,
    }
);

const QuestionComments = model('QuestionComments', questionCommentsSchema);

module.exports = QuestionComments;
