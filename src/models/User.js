const { model, Schema, mongoose } = require('mongoose');

// const {DB} = require('../config/db')

// const currentDb = mongoose.connection.useDb(DB)

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  // timestamps: true,

}, {
  timestamps: true,

});

userSchema.index(
  { username: 1 },
  {
    collation: {
      locale: 'en',
      strength: 1,
    },
  }
);

// const User = currentDb.model('User', userSchema);
const User = model('User', userSchema);

module.exports = User;
