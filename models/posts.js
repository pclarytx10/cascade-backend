// Dependencies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const PostSchema = new Schema({
    title: {type: String},
    image: {type: String},
    content: {type: String},
}, {timestamps: true});

// Create Model
const Posts = mongoose.model('Post', PostSchema);

// Export Model
module.exports = Posts;