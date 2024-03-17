import  mongoose from 'mongoose'

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
      type: mongoose.Schema.Types.ObjectId,
      ref:"Category",
      default:"651b4566871ddee58545337c"
    },
    owner: {
      id_user: {
        type: String,
        default: '', // Default value for 'id'
      },
      fname: {
        type: String,
        default: '', // Default value for 'name'
      },
      lname: {
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
  },{
  timestamps: true
});

export default mongoose.models.Course || mongoose.model('Course', courseSchema);