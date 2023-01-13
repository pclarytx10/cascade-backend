// get .env variables
require("dotenv").config();

// pull PORT from .env, give default value of 4000
const { PORT = 4000, MONGODB_URL } = process.env;

// import express
const express = require("express");

// create application object
const app = express();

// import mongoose
const mongoose = require("mongoose");

// import middlware
const cors = require("cors");
const morgan = require("morgan");

//PULL REQ TEST