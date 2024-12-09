// userRoutes.js
const express = require('express');
const router = express.Router();
const userProfileController = require('../controllers/userProfileController');

// Route to create a new user profile
router.post('/profiles', userProfileController.createUserProfile);

// Route to update a specific user profile
router.patch('/profiles/:id', userProfileController.updateUserProfile);

// Route to get a specific user profile by ID
router.get('/profiles/:id', userProfileController.getUserProfile);

// Route to delete a specific user profile by ID
router.delete('/profiles/:id', userProfileController.deleteUserProfile);

router.get('/', (req, res)=>{
    res.send("Server Running..")
})

module.exports = router;