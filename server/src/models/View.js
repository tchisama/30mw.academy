
const mongoose = require('mongoose');

const ViewModel = new mongoose.Schema({
  id_user: {
    type:String,
    required: true,
  },
  id_course:{
    type: String,
    required: true,
  },
  id_video: {
    type: String,
    required: true,
  }
},{
  timestamps: true
})


module.exports = mongoose.model('View', ViewModel);