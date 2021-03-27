const { Schema, model } = require('mongoose');

const categorySchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please provide the category name'],
    unique: [true, 'Category already exists'],
  },
  icon: {
    type: String,
  },
  color: {
    type: String,
  },
});

module.exports = model('Category', categorySchema);
