const mongoose = require('mongoose');

// mongoose schema for user

const categorySchema = new mongoose.Schema({
  name: String,
});

module.exports = mongoose.model('Category', categorySchema);
