const { model, Schema, Types, mongoose } = require('mongoose');
// require('./Ata')
// require('./User')

// const { DB } = require('../config/db');

// const currentDb = mongoose.connection.useDb(DB);

const questionSchema = new Schema(
    {
        question: {
            type: String,
            required: true,
        },
        ansA: {
            type: String,
            required: true,
        },
        ansB: {
            type: String,
            required: true,
        },
        ansC: {
            type: String,
            required: true,
        },
        correctAns: {
            type: String,
            required: true,
        },
        ata: {
            type: Types.ObjectId,
            ref: 'Ata',
        },
        type: [
            {
                type: Types.ObjectId,
                ref: 'Type',
            },
        ],
        level: {
            type: Number,
        },
        cat: {
            type: String,
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

const Question = model('Question', questionSchema);
// const Question = currentDb.model('Question', questionSchema);

module.exports = Question;
