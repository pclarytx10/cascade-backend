// Dependencies
const express = require('express');
const userRouter = express.Router();
const Users = require('../models/users.js');
const bcrypt = require('bcrypt');

// Routes
// Index
userRouter.get("/", async (req, res) => {
    try {
        const users = await Users.find({});
        res.json(users);
    } catch (error) {
        res.status(400).json(error);
    }
});

// Delete
userRouter.delete("/:id", async (req, res) => {
    try {
        const deletedUser = await Users.findByIdAndRemove(req.params.id);
        res.json(deletedUser);
    } catch (error) {
        res.status(400).json(error);
    }
});

// Update
userRouter.put("/:id", async (req, res) => {
    try {
        const updatedUser = await Users.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.json(updatedUser);
    } catch (error) {
        res.status(400).json(error);
    }
});

// Create
userRouter.post("/", async (req, res) => {
    try {
        const newUser = await Users.create(req.body);
        res.json(newUser);
    } catch (error) {
        res.status(400).json(error);
    }
});

//Export Router
module.exports = userRouter;