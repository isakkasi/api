const {model, Schema, Types: { ObjectId }, mongoose} = require("mongoose");

// const {DB} = require('../config/db')

// const currentDb = mongoose.connection.useDb(DB)


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
    
    dateOfBirth: {
        type: String,
    },
    placeOfBirth: {
        type: String,
    },

}, {
    timestamps: true,

});

const UserDetails = model("UserDetails", userDetailsSchema);
// const UserDetails = currentDb.model("UserDetails", userDetailsSchema);

module.exports = UserDetails;
