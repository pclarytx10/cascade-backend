// Dependencies
const express = require('express');
const postRouter = express.Router();
const Posts = require('../models/posts.js');

// Routes
// Index
postRouter.get("/", async (req, res) => {
    try {
        const posts = await Posts.find({});
        res.json(posts);
    } catch (error) {
        res.status(400).json(error);
    }
});

// Delete

// Update

// Create
postRouter.post("/", async (req, res) => {
    try {
        const newPost = await Posts.create(req.body);
        res.json(newPost);
    } catch (error) {
        res.status(400).json(error);
    }
});

//Export Router
module.exports = postRouter;