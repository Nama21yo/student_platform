const userController = require("../controllers/user.controller");
const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth.middleware");
const guardMiddleWare = require("../middleware/guard.middleware");
// POST=> Creating something/resource(user)
router.post("/signup", userController.signup);
router.post("/login", userController.login);
router.get(
  "/users",
  authMiddleware,
  guardMiddleWare(["admin", "teacher"]),
  userController.getAllUsers
);
module.exports = router;
