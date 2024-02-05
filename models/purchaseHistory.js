const mongoose = require('mongoose');

const purchaseHistorySchema = new mongoose.Schema({
  purchaseId: { type: String, unique: true, required: true },
  bookId: { type: String, required: true },
  userId: { type: String, required: true },
  purchaseDate: { type: Date, default: Date.now },
  price: { type: Number, required: true },
  quantity: { type: Number, default: 1 },
});

module.exports = mongoose.model('PurchaseHistory', purchaseHistorySchema);
