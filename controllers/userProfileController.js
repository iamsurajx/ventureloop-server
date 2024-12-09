// userProfileController.js
const UserProfile = require('../models/user.model'); // Adjust the path as necessary

// Create a new user profile
exports.createUserProfile = async (req, res) => {
    try {
        const newUserProfile = new UserProfile(req.body);
        await newUserProfile.save();
        res.status(201).json(newUserProfile);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update specific fields of a user profile
exports.updateUserProfile = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedUserProfile = await UserProfile.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedUserProfile) return res.status(404).json({ message: 'User Profile not found' });
        res.json(updatedUserProfile);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get a user profile by ID
exports.getUserProfile = async (req, res) => {
    const { id } = req.params;
    try {
        const userProfile = await UserProfile.findById(id);
        if (!userProfile) return res.status(404).json({ message: 'User Profile not found' });
        res.json(userProfile);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a user profile by ID
exports.deleteUserProfile = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedUserProfile = await UserProfile.findByIdAndDelete(id);
        if (!deletedUserProfile) return res.status(404).json({ message: 'User Profile not found' });
        res.json({ message: 'User Profile deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};