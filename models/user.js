const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['Admin', 'Author', 'RetailUser'], default: 'RetailUser' },
});

module.exports = mongoose.model('User', userSchema);
