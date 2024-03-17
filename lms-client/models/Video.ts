import mongoose from "mongoose";
const videoSchema = new mongoose.Schema({
  title: String,
  url: String,
  duration: Number,
  id_video: String,
  free: Boolean,
});
export default mongoose.models.Video || mongoose.model("Video", videoSchema)