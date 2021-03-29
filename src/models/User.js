const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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
    select: false,
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

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) next();

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);

  next();
});

userSchema.methods.matchPassword = async function (password) {
  try {
    const matched = await bcrypt.compare(password, this.password);

    return matched;
  } catch (error) {
    console.log(error);
    return false;
  }
};

userSchema.methods.getToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

module.exports = model('User', userSchema);
