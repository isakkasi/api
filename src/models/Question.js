// Refractured

const { model, Schema, Types } = require('mongoose');

const {DB} = require('../config/db')

const currentDb = mongoose.connection.useDb(DB)

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
        level: {
            type: Number,
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

const Question = currentDb.model('Question', questionSchema);

module.exports = Question;
