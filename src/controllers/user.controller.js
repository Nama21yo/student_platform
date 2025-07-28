const userService = require("../services/user.service");

class UserController {
  signup = async (req, res) => {
    // using regular expression
    // ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$
    // we validate the data
    try {
      console.log("request body", req.body);
      // abcd1234yweruweuq => hash => database
      // compare
      const { accessToken, dataToDatabase } = await userService.signup(
        req.body
      );
      console.log("User data", dataToDatabase);

      res.status(201).json({
        accessToken,
        dataToDatabase,
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  };

  login = async (req, res) => {
    try {
      console.log("Login Data", req.body);
      const { accessToken, currentUser } = await userService.login(req.body);
      res.status(200).json({ accessToken, currentUser });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  getAllUsers = async (req, res) => {
    try {
      const users = await userService.getAllUsers();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
}
module.exports = new UserController();
//
