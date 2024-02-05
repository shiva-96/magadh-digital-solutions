const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  bookId: { type: String, unique: true, required: true },
  authors: [{ type: String, required: true }],
  sellCount: { type: Number, default: 0 },
  title: { type: String, unique: true, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true, min: 100, max: 1000 },
});

module.exports = mongoose.model('Book', bookSchema);
