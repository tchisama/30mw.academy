const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  title: String,
  url: String,
  duration: Number,
  id: String,
});

const courseSectionSchema = new mongoose.Schema({
  title: String,
  description: String,
  videos: [videoSchema], // Define an array of Video subdocuments
  id: String,
});

const courseSchema = new mongoose.Schema({
  title: String,
  description: String,
  sections: [courseSectionSchema], // Define an array of CourseSection subdocuments
  price: Number,
  image: String,
  category: String,
  _id: String,
});

const CourseModel = mongoose.model('Course', courseSchema);

module.exports = CourseModel;