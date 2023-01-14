// Dependencies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
    email: {type: String, required: [true, "Email is required."],unique: [true, 'Email is in use.']},
    password: {type: String, required: [true, "Password is required."]},
    firstName: {type: String, required: [true, "First name is required."]},
    lastName: {type: String, required: [true, "Last name is required."]},
}, {timestamps: true});

// Create Model
const Users = mongoose.model('User', UserSchema);

// Export Model
module.exports = Users;