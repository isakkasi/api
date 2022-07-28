const { model, Schema } = require("mongoose");

const {DB} = require('../config/db')

const currentDb = mongoose.connection.useDb(DB)

const somethingSchema = new Schema({
    something: {
        type: String,
    },
});

const Something = currentDb.model("Something", somethingSchema);

module.exports = Something;
