// Refractured

const { model, Schema } = require('mongoose');

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

const User = model('User', userSchema);

module.exports = User;
