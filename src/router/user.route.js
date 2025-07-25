const userController = require("../controllers/user.controller");
const express = require("express");
const router = express.Router();

// POST=> Creating something/resource(user)
router.post("/signup", userController.signup);

module.exports = router;
