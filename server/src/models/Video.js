const mongoose = require('mongoose');
// Define the VideoSchema
const videoSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
  });
  
  const VideoModel = mongoose.model('Video', videoSchema);

  module.exports = { VideoModel , videoSchema };