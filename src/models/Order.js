const { Schema, model } = require('mongoose');

const orderSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  items: [
    {
      product: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
      },
      quantity: {
        type: Number,
        default: 1,
      },

      total: Number,
    },
  ],
  completed: {
    type: Boolean,
    default: false,
  },

  total: Number,
});

module.exports = model('Order', orderSchema);
