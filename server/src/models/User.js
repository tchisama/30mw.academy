const mongoose = require('mongoose');

// mongoose schema for user

const userSchema = new mongoose.Schema({
  lname: {
    type: String,
    required: true,
  },
  fname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  id_user:{
    type: String,
    required: true,
    unique: true
  },
  photo:{
    type: String,
    required: false
  }
});

module.exports = mongoose.model('User', userSchema);
