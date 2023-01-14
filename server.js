// get .env variables
require("dotenv").config();

// pull PORT from .env, give default value of 4000
const { PORT = 4000, MONGODB_URL } = process.env;

// import dependencies
const express = require("express");
const morgan = require("morgan");
const cors = require("cors"); 

// create application object
const app = express();

// import mongoose
const mongoose = require("mongoose");

// import middlware
app.use(express.json()); // parse json bodies, create req.body
app.use(cors()); // to prevent cors errors, open access to all origins
// Mogan middleware for logging HTTP requests
if (process.env.NODE_ENV !== 'production') {
    app.use(morgan('dev'))
}

// Establish Connection
mongoose.connect(MONGODB_URL)

// Connection Events
mongoose.connection
    .on("open", () => console.log("You are connected to mongoose"))
    .on("close", () => console.log("You are disconnected from mongoose"))
    .on("error", (error) => console.log(error));

// import controllers
const postsController = require('./controllers/posts.js');
app.use('/posts', postsController);
const usersController = require("./controllers/users.js");
app.use("/users", usersController);

// create a test route
app.get("/", (req, res) => {
    res.send("Cascade API");
});

// Listen on a port
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));