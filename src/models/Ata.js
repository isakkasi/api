
const { model, Schema, Types, default: mongoose } = require('mongoose');

const {DB} = require('../config/db')

const currentDb = mongoose.connection.useDb(DB)

const ataSchema = new Schema({
    // IntId</th>
    // <th>Title</th>
    // <th>Location</th>
    // <th>Students qty</th>
    // <th>Start</th>
    // <th>End<

    ata: {
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
}, {
    timestamps: true,
    

});



const Ata = currentDb.model('Ata', ataSchema);

module.exports = Ata;
