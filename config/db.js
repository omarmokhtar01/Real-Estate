const mongoose = require("mongoose");
mongoose.set('strictQuery', false)

const dbConnect = async () => {
    await mongoose.connect(process.env.MONGO_URL);
}
module.exports = dbConnect