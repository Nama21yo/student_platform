const User = require("../models/user.model");

class UserRepository {
  // CRUD
  async createUser(data) {
    const user = new User(data);
    return user.save();
  }
  async readAllUsers() {
    return await User.find();
  }
  async findUserbyEmail(email) {
    return User.findOne({ email: email });
  }
  async updateUser(id, updateData) {
    return await User.findByIdAndUpdate(id, updateData);
  }
  async deleteUser(id) {
    return await User.findByIdAndDelete(id);
  }
}
module.exports = new UserRepository();
//
