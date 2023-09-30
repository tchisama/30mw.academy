const mongoose = require('mongoose');
const {videoSchema} = require('./Video');
const courseSectionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  videos: [videoSchema], // Embed VideoSchema as an array of videos
  id: {
    type: String,
    required: true,
  },
});


const CourseSectionModel = mongoose.model('CourseSection', courseSectionSchema);

module.exports = { CourseSectionModel , courseSectionSchema};