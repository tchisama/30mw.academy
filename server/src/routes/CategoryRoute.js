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


module.exports = router;