const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const dbConnect = require("./config/db");
const mountRoute = require('./router')

const app = express();
const authController = require('./controllers/authController')
const propertyController = require('./controllers/propertyController')
const uploadController = require('./controllers/uploadController');
const yachtController = require("./controllers/yachtController");
const userController = require("./controllers/userController");
const commentController = require("./controllers/commentController");

// db connecting
dbConnect()

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/images', express.static('public/images'))

mountRoute(app)

// starting server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log("Server has been started"));