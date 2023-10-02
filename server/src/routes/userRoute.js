
const express = require('express');
const router = express.Router();
const UserModel = require('../models/User'); // Import your User model
const CourseModel = require('../models/Course');


router.post('/create-user', async (req, res) => {
    // add user to the database if the id_user is unique else return the user already exists
    const user = await UserModel.findOne({ id_user: req.body.id_user });
    
    if(user){
        res.status(200).json(user);
    }else{
        try {
            const newUser = new UserModel(req.body);
            const savedUser = await newUser.save();
            res.status(201).json(savedUser);
        }catch{
            res.status(500).json({ message: 'Failed to create the user' });
        }
    }

});
// get all users from the database
router.get('/users', async (req, res) => {
  try {
    const users = await UserModel.find();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to get the users' });
  }
})
// get user by id
router.get('/user/:id', async (req, res) => {
  try {
    const user = await UserModel.findOne({id_user:req.params.id});
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to get the user' });
  }
});
module.exports = router;