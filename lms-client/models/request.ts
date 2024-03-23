import mongoose from "mongoose";

const requestModel = new mongoose.Schema({
  _30mw_user_id: {
    type: String,
    required: true,
  },
  id_course: {
    type: String,
    required: true,
  },
  user_name: {
    type: String,
    required: true,
  },
  user_number: {
    type: String,
    required: true,
  },
  user_email: {
    type: String,
    required: true,
  },
});

export default mongoose.models.Request ||
  mongoose.model("Request", requestModel);
