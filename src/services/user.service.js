const userRepository = require("../repository/user.repository");
const bcrypt = require("bcrypt");
const jwtProvider = require("../provider/jwt.provider");
class UserService {
  // signup
  async signup(data) {
    // email, password, name , role
    console.log("Destructured data", data);

    const { email, password, name, role } = data;
    const existingUser = await userRepository.findUserbyEmail(email);
    console.log("ExistingUser", existingUser);

    if (existingUser) {
      throw new Error("Email already Exists");
    }
    // we don't have our own hash function and also for salt
    // const hashedPassword = this.hashFunction(password);
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("My role", typeof role);
    const stringRole = role.toString();
    console.log("My User role", typeof stringRole);

    const dataToDatabase = await userRepository.createUser({
      name,
      email,
      password: hashedPassword,
      role: stringRole,
    });

    console.log("Data saved", dataToDatabase);

    // generate accessToken
    const accessToken = jwtProvider.generateAccessToken(dataToDatabase);
    // generate refreshToken
    return {
      accessToken,
      dataToDatabase,
    };
  }

  // signin
  // logout

  // get all users
  // update user
  // delete user
}
module.exports = new UserService();
//
