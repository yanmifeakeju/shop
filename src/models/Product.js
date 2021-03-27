const { Schema, model } = require('mongoose');

const productSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please provide the product name'],
    unique: true,
  },
  description: {
    type: String,
    required: [true, 'Please provide the description'],
  },
  richDescription: {
    type: String,
    default: '',
  },
  image: { type: String, default: '' },
  images: [
    {
      type: String,
    },
  ],
  brand: { type: String, default: '' },
  price: {
    type: Number,
    default: 0,
    min: 1,
  },
  category: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
  countInStock: {
    type: Number,
    required: true,
    min: 0,
    max: 255,
  },
  numReviews: {
    type: Number,
    default: 0,
  },
  isFeatured: { type: Boolean, default: false },
  dateCreated: { type: Date, default: Date.now },
});

module.exports = model('Product', productSchema);
