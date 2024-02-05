const express = require('express');
const router = express.Router();
const Book = require('../models/book');

// Create a new book
router.post('/books', async (req, res) => {
  try {
    const book = new Book(req.body);
    await book.save();
    res.status(201).send(book);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all books
router.get('/books', async (req, res) => {
  try {
    const books = await Book.find();
    res.send(books);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update sellCount based on purchase
router.post('/books/sell/:bookId', async (req, res) => {
  try {
    const book = await Book.findOneAndUpdate(
      { bookId: req.params.bookId },
      { $inc: { sellCount: 1 } },
      { new: true }
    );

    if (!book) {
      return res.status(404).send();
    }

    res.send(book);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
