const userService = require("../services/user.service");

class UserController {
  signup = async (req, res) => {
    // using regular expression
    // ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$
    // we validate the data
    try {
      console.log("request body", req.body);

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
}
module.exports = new UserController();
//
