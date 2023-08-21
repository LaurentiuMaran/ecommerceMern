const mongoose = require('mongoose');
const validator = require('validator');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter product name'],
    trim: true,
    maxLength: [100, 'Product name cannot exceed 100 characters'],
  },
  price: {
    type: Number,
    required: [true, 'Please enter product price'],
    default: 0.0,
  },
  description: {
    type: String,
    required: [true, 'Please enter product description'],
  },
  image: { type: String, required: true },
  category: {
    type: String,
    required: [true, 'Please select category for product'],
  },
  manufacturer: {
    type: String,
    required: [true, 'Please enter manufacturer name'],
  },
  stock: {
    type: Number,
    required: [true, 'Please enter product stock'],
    default: 0,
  },
});

module.exports = mongoose.model('Product', productSchema);
