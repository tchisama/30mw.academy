// src/routes/mainRoute.js

const express = require('express');
const router = express.Router();
const CourseModel = require('../models/Course'); // Import your Course model
const mongoose = require('mongoose');
const AccessModel = require('../models/Access');





// POST request to create a new course
router.post('/create-course', async (req, res) => {
  try {
    console.log('Request Body:', req.body);

    // Create a new course instance based on the request body
    const newCourse = new CourseModel(req?.body);

    // Save the new course to the database
    const savedCourse = await newCourse.save();

    res.status(201).json({id:savedCourse._id});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to create the course' });
  }
});
// GET request to get a course by id

router.get('/course/:id', async (req, res) => {
  try {
    const course = await CourseModel.findById(req.params.id);
    res.status(200).json(course);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to get the course' });
  }
});

// POST request to update a course by id
router.post('/update-course/:courseId', async (req, res) => {
    const result = await CourseModel.findByIdAndUpdate(req.params.courseId,
      req.body, { new: true });

    if (result) {
      res.status(200).json({ message: 'Course updated successfully' });
    } else {
      res.status(404).json({ message: 'Course not found' });
    }
})
// get all courses
router.get('/courses', async (req, res) => {
  try {
    const courses = await CourseModel.find();
    res.status(200).json(courses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to get the courses' });
  }
})
// get all courses
router.get('/my-courses/:userId', async (req, res) => {
  try {
    const courses = await CourseModel.aggregate([
      {
        $match: {
          "owner.id_user": req.params.userId
        }
      }
    ])
    res.status(200).json(courses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to get the courses' });
  }
})

// get all courses for client side
router.get('/courses-client/:userId', async (req, res) => {
  try {
    const courses = await CourseModel.find({},'title description price image category')
    res.status(200).json(courses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to get the courses' });
  }
})

// get course for client side
router.post('/get-course', async (req, res) => {
  
  try {
    const course = await CourseModel.findById(req.body.id,{
      title: true,
      price: true,
      category: true,
      owner: true,
      _id: true,
      sections:{
        title: true,
        id_section: true,
        videos:{
          title: true,
          free: true,
          id_video: true
        }
      }
    });
    res.status(200).json(course);
  
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
})
// get video by course id and video id

// post get video by course id and video id
router.post('/get-video', async (req, res) => {
  try {
    const access = await AccessModel.findOne({id_user:req.body.id_user,id_course:req.body.id_course});
    const video = await getVideoByCourseIdAndVideoId(req.body.id_course, req.body.id_video);
    if(access|| video?.free){
      res.status(200).json(video);
    }else{
      res.status(200).json(null);
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
})



// Function to get a video by course ID and video ID

const getVideoByCourseIdAndVideoId = async (courseId, videoId) => {
  try {
    // Find the course by ID and filter the videos array to find the desired video
    const course = await CourseModel.findOne(
      { _id: courseId },
      {
        sections: {
          $elemMatch: {
            videos: {
              $elemMatch: { id_video: videoId }
            }
          }
        }
      }
    );

    // Check if the course and video exist
    if (course && course.sections.length > 0 && course.sections[0].videos.length > 0) {
      const video = course.sections[0].videos.find(video => video.id_video === videoId);
      return video;
    } else {
      return null; // Video not found
    }
  } catch (error) {
    console.error('Error:', error)
    return null;
  }
}



module.exports = router;
