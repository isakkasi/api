// const {} from 'mongoose'


const { model, Schema, Types } = require('mongoose');

const courseSchema = new Schema({
    // IntId</th>
    // <th>Title</th>
    // <th>Location</th>
    // <th>Students qty</th>
    // <th>Start</th>
    // <th>End<

    internalRef: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    location: {
        type: String,
    },
    students: {
        type: Number,
    },
    start: {
        type: Date,
    },
    end: {
        type: Date,
    },
    createdBy: {
        type: Types.ObjectId,
        ref: 'User',
    },
    lastUpdatedBy: {
        type: Types.ObjectId,
        ref: 'User',
    },
}, {
    timestamps: true,

});

const Course = model('Course', courseSchema);

module.exports = Course;
