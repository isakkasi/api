const { model, Schema, Types, mongoose } = require('mongoose');

// const {DB} = require('../config/db')

// const currentDb = mongoose.connection.useDb(DB)

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

// const QuestionComments = currentDb.model('QuestionComments', questionCommentsSchema);
const QuestionComments = model('QuestionComments', questionCommentsSchema);

module.exports = QuestionComments;
