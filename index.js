const express = require("express");
const logger = require("./src/middleware/logger.middleware");
const app = express();

// middlewares
app.use(express.json()); // to json format
app.use(logger);

app.get("/", (req, res) => res.send("Hi this is a student platform project"));

app.listen(5500, () => {
  console.log("Server started");
});
//
