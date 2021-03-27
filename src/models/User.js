const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name'],
  },
  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  isAdmin: {
    type: Boolean,
    default: false,
  },

  isVerifiedPhone: {
    type: Boolean,
    default: false,
  },

  isVerfiedEmail: {
    type: Boolean,
    default: false,
  },

  phone: {
    type: String,
    required: true,
  },

  street: {
    type: String,
  },
  apartment: {
    type: String,
  },

  city: {
    type: String,
  },

  zipCode: {
    type: String,
  },

  country: {
    type: String,
  },
});

module.exports = model('User', userSchema);
