const mongoose = require('mongoose');

const userProfileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    tag: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    lookingFor: {
        type: [String],
        enum: ['co-founder', 'team mates', 'startups', 'investors'],
        required: true
    },
    skillset: {
        type: [String],
        enum: [
            'web developer', 
            'app developer', 
            'product', 
            'team management', 
            'marketing', 
            'sales', 
            'finance', 
            'social media', 
            'distribution', 
            'legal', 
            'u/ux design', 
            'product design'
        ],
        required: true
    },
    commitmentLevel: {
        type: String,
        enum: [
            'Already full time in a startup',
            'no preferences',
            'ready to go full-time'
        ],
        required: true
    },
    interests: {
        type: [String],
        enum: ['ai/ml', 'ar/vr', 'advertising', 'audio tech'],
        required: true
    },
    priorStartupExperience: {
        type: [String],
        enum: ['sold a startup', 'worked in a startup'],
        required: true
    },
    equityExpectation: {
        type: String,
        enum: ['fully negotiable', 'equal splits', 'willing to offer'],
        required: true
    },
    myExperience: {
        type: [String],
        default: []
    },
    myProjects: {
        type: [String],
        default: []
    }
}, { timestamps: true });

const UserProfile = mongoose.model('UserProfile', userProfileSchema);

module.exports = UserProfile;