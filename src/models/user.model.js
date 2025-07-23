const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: {
    type: String,
    // Student, Parent, Teacher, Admin
    enum: ["student", "parent", "teacher", "admin"],
    default: ["student"],
  },
});

module.exports = mongoose.model("User", userSchema);
//
