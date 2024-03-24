import mongoose from "mongoose";

const AccessModel = new mongoose.Schema(
  {
    id_user: {
      type: String,
      required: true,
    },
    id_course: {
      type: String,
      required: true,
    },
    price_access: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.models.Access || mongoose.model("Access", AccessModel);

