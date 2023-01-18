// Dependencies
const express = require('express');
const postRouter = express.Router();
const Posts = require('../models/posts.js');

// Routes
// Seed
const seedData = require('../seedData.js')
postRouter.get('/seed', (req, res) => {
    Posts.deleteMany({}, (err, allPosts) => {})
    Posts.create(seedData, (err, data) => {
        res.redirect('/newsfeed')
    })
})

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
postRouter.delete("/:id", async (req, res) => {
    try {
        const deletedPost = await Posts.findByIdAndRemove(req.params.id);
        res.json(deletedPost);
    } catch (error) {
        res.status(400).json(error);
    }
});

// Update
postRouter.put("/:id", async (req, res) => {
    try {
        const updatedPost = await Posts.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.json(updatedPost);
    } catch (error) {
        res.status(400).json(error);
    }
});

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
