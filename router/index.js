const authController = require('../controllers/authController')
const propertyController = require('../controllers/propertyController')
const uploadController = require('../controllers/uploadController');
const yachtController = require("../controllers/yachtController");
const userController = require("../controllers/userController");
const commentController = require("../controllers/commentController");

const mountRoute = (app) => {
    app.use("/auth", authController);
    app.use("/property", propertyController);
    app.use("/yacht", yachtController);
    app.use('/upload', uploadController)
    app.use('/user', userController)
    app.use('/comment', commentController)
}


module.exports = mountRoute