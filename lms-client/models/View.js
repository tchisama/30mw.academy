import mongoose from "mongoose";

const ViewModel = new mongoose.Schema(
  {
    id_user: {
      type: String,
      required: true,
    },
    id_course: {
      type: String,
      required: true,
    },
    id_video: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.models.View || mongoose.model("View", ViewModel);

