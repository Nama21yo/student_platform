const mongoose = require("mongoose");

const connectDB = () => {
  try {
    console.log(typeof process.env.MONGO_URI);

    const connect = mongoose.connect(process.env.MONGO_URI);
    console.log(`Mongoose Connnected`);
  } catch (error) {
    console.log(`Couldn't connect Mongodb ${error}`);
  }
};

module.exports = connectDB;
//
