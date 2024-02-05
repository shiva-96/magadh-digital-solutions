const jwt = require('jsonwebtoken');
const User = require('../models/user');

const generateAuthToken = async (user) => {
  const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_SECRET);
  user.tokens = user.tokens.concat({ token });
  await user.save();
  return token;
};

module.exports = {
  generateAuthToken,
};
