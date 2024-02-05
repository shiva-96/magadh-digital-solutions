const express = require('express');
const router = express.Router();
const PurchaseHistory = require('../models/purchaseHistory');
const Book = require('../models/book');

// Create a new purchase record
router.post('/purchase', async (req, res) => {
  try {
    const { bookId, userId, price, quantity } = req.body;
    const purchase = new PurchaseHistory({ bookId, userId, price, quantity });
    await purchase.save();

    // Update sellCount in the book
    await Book.findOneAndUpdate({ bookId }, { $inc: { sellCount: quantity } });

    res.status(201).send(purchase);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get purchase history for a user
router.get('/purchase/history/:userId', async (req, res) => {
  try {
    const purchases = await PurchaseHistory.find({ userId: req.params.userId });
    res.send(purchases);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
