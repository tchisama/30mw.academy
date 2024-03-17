
const mongoose = require('mongoose');

const AccessModel = new mongoose.Schema({
  id_user: {
    type:String,
    required: true,
  },
  id_course:{
    type: String,
    required: true,
  },
  price_access: {
    type: Number,
    required: true,
  }
},{
  timestamps: true
})


module.exports = mongoose.model('Access', AccessModel);