const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authMiddleware = require('./middlewares/authMiddleware');
const userController = require('./controllers/userController');
const bookController = require('./controllers/bookController');
const purchaseController = require('./controllers/purchaseController');
const emailJob = require('./utils/emailJob');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true });

// Middleware
app.use(express.json());
app.use(userController);
app.use(authMiddleware);
app.use(bookController);
app.use(purchaseController);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
