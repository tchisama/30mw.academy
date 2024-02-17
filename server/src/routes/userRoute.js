
const express = require('express');
const router = express.Router();
const UserModel = require('../models/User'); // Import your User model
const CourseModel = require('../models/Course');
const AccessModel = require('../models/Access');
const ViewModel = require('../models/View');


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
    // i want to get users by order or time
    const users = await UserModel.find({}).sort({ createdAt: -1 });
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

// get user by id
router.get('/change-rule/:id/:rule', async (req, res) => {
  try {
    const user = await UserModel.findOneAndUpdate({id_user:req.params.id},{
      $set:{
        rule:req.params.rule
      }
    });
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to get the user' });
  }
});

// get user analytics
router.get('/users-analytics', async (req, res) => {
  try {
    const user = await UserModel.count();

    const Last7Days = await UserModel.aggregate([
      {
           $match: {
               createdAt: {'$gte': new Date(new Date() - 7 * 60 * 60 * 24 * 1000)},
           }
       },
       {
           $group: {
               _id: {$week: '$createdAt'},
               count: {$sum: 1}
           }
       }
   ])
    const today = await UserModel.aggregate([
      {
           $match: {
               createdAt: {'$gte': new Date(new Date() - 1 * 60 * 60 * 24 * 1000)},
           }
       },
       {
           $group: {
               _id: {$week: '$createdAt'},
               count: {$sum: 1}
           }
       }
   ])
   const admins = await UserModel.aggregate([
    {
         $match: {
             rule:"admin",
         }
    }
   ])

    res.status(200).json({
        user,
        Last7Days:Last7Days[0]?.count || 0,
        today:today[0]?.count || 0 ,
        admins:(admins?.length)||0
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to get the user' });
  }
});

// make access
router.post('/make-access', async (req, res) => {
  try {
    const newAccess = new AccessModel(req.body);
    newAccess.save();
    res.status(200).json(newAccess);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to make access' });
  }
});
// remove access by id
router.delete('/remove-access', async (req, res) => {
  try {
    const newAccess = await AccessModel.findByIdAndDelete(req.body.id_access);
    res.status(200).json(newAccess);
  } catch (error) {
    console.error(error);
  }
})


// get access
router.post('/get-access', async (req, res) => {
  try {
    const newAccess =await AccessModel.findOne({id_user:req.body.id_user,id_course:req.body.id_course});
    res.status(200).json(newAccess?true:false);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to make access' });
  }
});
// add marked view 
router.post('/add-marked-view', async (req, res) => {
 try {
    const newView = new ViewModel(req.body);
    newView.save();
    res.status(200).json(newView);
 } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to make view' });
 }
})
// remove marked view 
router.post('/remove-marked-view', async (req, res) => {
 try {
    const newView = await ViewModel.findOneAndDelete(
      {
        id_user:req.body.id_user,
        id_course:req.body.id_course,
        id_video:req.body.id_video
      });
    res.status(200).json(newView);
 } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to make view' });
 }
})

// get view by id_user  and id_course 
router.get('/get-views/:id_user/:id_course', async (req, res) => {
  try {
    const views= await ViewModel.find({ 
      id_user: req.params.id_user,
      id_course: req.params.id_course
    },{
      id_video:1
    });
    res.status(200).json(views.map(view=>view.id_video));
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to get the view' });
  }
});

// get view by id_user  and id_course 
router.get('/get-views/:id_user/:id_course', async (req, res) => {
  try {
    const views= await ViewModel.find({ 
      id_user: req.params.id_user,
      id_course: req.params.id_course
    },{
      id_video:1
    });
    res.status(200).json(views.map(view=>view.id_video));
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to get the view' });
  }
});


module.exports = router;