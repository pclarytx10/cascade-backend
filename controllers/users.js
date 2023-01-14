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

// Update

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