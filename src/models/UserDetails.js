// Refractured

const {DB} = require('../config/db')

const currentDb = mongoose.connection.useDb(DB)

const {model, Schema, Types: { ObjectId }} = require("mongoose");

const userDetailsSchema = new Schema({
    userId: {
        type: ObjectId,
        ref: "User",
    },
    fullName: {
        type: String,
    },
    email: {
        type: String,
        // required: true,
      },
    role: {
        type: String,
        enum: ["User", "Examiner", "Instructor", "Invigilator", "Admin"],
    },
    dateOfBirth: {
        type: String,
    },
    placeOfBirth: {
        type: String,
    },
    // timestamps: true,

}, {
    timestamps: true,

});

const UserDetails = currentDb.model("UserDetails", userDetailsSchema);

module.exports = UserDetails;
