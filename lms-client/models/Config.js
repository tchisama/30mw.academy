import mongoose from "mongoose";
const ConfigModel = new mongoose.Schema({
  landing_page: {
    Header: {
      type: String,
    },
    Text: {
      type: String,
    },
    learn: [
      {
        type: String,
      },
    ],
    button: {
      type: String,
    },
  },
});

export default mongoose.models.Config || mongoose.model("Config", ConfigModel);

