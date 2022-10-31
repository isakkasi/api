const { model, Schema, Types, mongoose } = require('mongoose');


const examSchema = new Schema(
    {
        ref: {
            type: String,
            required: true,
        },
        // title: {
        //     type: String,
        //     required: true,
        // },
        date: {
            type: Date,
        },
        students: {
            type: Number,
        },
        phase: {
            type: String,
        },
        course: {
            type: Types.ObjectId,
            ref: 'Course',
        },
        status: {
            type: String,
            enum: ['Planned', 'Executed', 'Cancelled']
        },
        author: {
            type: Types.ObjectId,
            ref: 'User',
        },
        examiner: {
            type: Types.ObjectId,
            ref: 'User',
        },
        invigilator: {
            type: Types.ObjectId,
            ref: 'User',
        },
        questions: [
            {
                type: Types.ObjectId,
                ref: 'Questions',
            }
        ],
        questionsJSON: {
            type: String,
        }
    },
    {
        timestamps: true,
    }
);

const Exam = model('Exam', examSchema);

module.exports = Exam;
