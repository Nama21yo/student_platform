const express = require("express");
const logger = require("./src/middleware/logger.middleware");
const app = express();
const userRouter = require("./src/router/user.route");
const connectDB = require("./src/config/database.config");

const dotenv = require("dotenv");

dotenv.config();
// middlewares
app.use(express.json()); // to json format
// app.use()
// app.use(logger);

// api-versioning
app.use("/api/v1", userRouter);
app.get("/", (req, res) => res.send("Hi this is a student platform project"));
try {
  connectDB(); // connect to the database
} catch (error) {
  console.log(`Some datbase error ${error.message}`);
}

app.listen(5500, () => {
  console.log("Server started");
});
//
