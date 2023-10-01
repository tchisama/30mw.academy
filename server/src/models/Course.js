const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  title: String,
  url: String,
  duration: Number,
  id_video: String,
  free: Boolean,
});

const courseSectionSchema = new mongoose.Schema({
  title: String,
  description: String,
  videos: [videoSchema], // Define an array of Video subdocuments
  id_section: String,
});

const courseSchema = new mongoose.Schema({
    title: {
      type: String,
      default: 'Default Course Title', // Default value for 'title'
    },
    description: {
      type: String,
      default: 'Default Course Description', // Default value for 'description'
    },
    sections: [courseSectionSchema],
    price: {
      type: Number,
      default: 0, // Default value for 'price'
    },
    image: {
      type: String,
      default: '', // Default value for 'image'
    },
    category: {
      type: String,
      default: '', // Default value for 'category'
    },
    owner: {
      id: {
        type: String,
        default: '', // Default value for 'id'
      },
      name: {
        type: String,
        default: '', // Default value for 'name'
      },
      email: {
        type: String,
        default: '', // Default value for 'email'
      },
      photo:{
        type: String,
        default: '', // Default value for 'photo'
      }
    },
  });

const CourseModel = mongoose.model('Course', courseSchema);

module.exports = CourseModel;