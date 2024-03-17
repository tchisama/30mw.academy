import mongoose from "mongoose";

// mongoose schema for user

const categorySchema = new mongoose.Schema({
  name: String,
});

const CategoryModel = mongoose.models.Category || mongoose.model("Category", categorySchema);
export default CategoryModel;
