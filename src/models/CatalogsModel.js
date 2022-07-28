const { model, Schema } = require("mongoose");

const somethingSchema = new Schema({
    something: {
        type: String,
    },
});

const Something = model("Something", somethingSchema);

module.exports = Something;
