const { model, Schema, Types, default: mongoose } = require('mongoose');

// const { DB } = require('../config/db');

// const currentDb = mongoose.connection.useDb(DB);

const typeSchema = new Schema(
    {
        // IntId</th>
        // <th>Title</th>
        // <th>Location</th>
        // <th>Students qty</th>
        // <th>Start</th>
        // <th>End<

        type: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        createdBy: {
            type: Types.ObjectId,
            ref: 'User',
        },
        lastUpdatedBy: {
            type: Types.ObjectId,
            ref: 'User',
        },
    },
    {
        timestamps: true,
    }
);

const Type = model('Type', typeSchema);
// const Type = currentDb.model('Type', typeSchema);

module.exports = Type;
