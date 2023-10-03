const express = require('express');
const router = express.Router();
const CategoreyModel = require('../models/Category'); // Import your Course model





// POST request to create a new course
router.post('/create-category', async (req, res) => {
  try {
    const category = new CategoreyModel(req?.body);
    category.save();
    res.status(201).json(category);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to create the category' });
  }
});
// get all categories
router.get('/categories', async (req, res) => {
  try {
    const categories = await CategoreyModel.find();
    res.status(200).json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to get the categories' });
  }
})
// delete cat by id
router.delete('/category/:id', async (req, res) => {
  try {
    const category = await CategoreyModel.findByIdAndDelete(req.params.id);
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }
    res.status(200).json({ message: 'Category deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to delete the category' });
  }
});
// update cat by id
router.put('/category/:id', async (req, res) => {
  try {
    const updatedCategory = await CategoreyModel.findByIdAndUpdate(req.params.id, req.body);
    if (!updatedCategory) {
      return res.status(404).json({ message: 'Category not found' });
    }
    res.status(200).json(updatedCategory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to update the category' });
  }
});
module.exports = router;