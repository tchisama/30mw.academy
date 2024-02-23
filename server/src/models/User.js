const mongoose = require('mongoose');

// mongoose schema for user

const userSchema = new mongoose.Schema({
  lname: {
    type: String,
    default: '',
  },
  fname: {
    type: String,
    default: '',
  },
  email: {
    type: String,
    default: '',
    unique: true
  },
  id_user:{
    type: String,
    default: '',
    unique: true
  },
  photo:{
    type: String,
    default: '',
  },
  rule: {
    type: String,
    enum: ['admin', 'teacher', 'user', 'contributor'],
    default: 'user', // Default role is 'user'
  },
},{
  timestamps: true
});


module.exports = mongoose.model('User', userSchema);
