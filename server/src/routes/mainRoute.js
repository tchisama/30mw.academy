// src/routes/mainRoute.js

const express = require('express');
const router = express.Router();
const CourseModel = require('../models/Course'); // Import your Course model





// POST request to create a new course

router.post('/create-course', async (req, res) => {
  try {
    console.log('Request Body:', req.body);

    // Create a new course instance based on the request body
    const newCourse = new CourseModel(req.body);

    // Save the new course to the database
    const savedCourse = await newCourse.save();

    res.status(201).json(savedCourse);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to create the course' });
  }
});

module.exports = router;
