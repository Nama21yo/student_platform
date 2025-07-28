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
    // abcd1234ghsfdhkfasjbkfj
    // a6GYntSzVidZ9uM9k1ml2e0q.2J8mKeO8W2uEuS8j3BIWB7jxNlvi
    // salt => a6GYntSzVidZ9uM9k1ml2e0q
    // 10 => cost factor

    // abcd1234
    // a6GYntSzVidZ9uM9k1ml2e0q.2J8mKeO8W2uEuS8j3BIWB7jxNlvi
    // bcrypt.compare
    // generate accessToken
    const accessToken = jwtProvider.generateAccessToken(dataToDatabase);
    // generate refreshToken
    return {
      accessToken,
      dataToDatabase,
    };
  }

  // signin / login
  async login(data) {
    // email, password
    const { email, password } = data;
    const currentUser = await userRepository.findUserbyEmail(email);

    if (!currentUser) {
      // is user is undefined
      throw new Error("User doesn't exist. Please SignUp");
    }

    const checkPassword = await bcrypt.compare(password, currentUser.password);

    if (!checkPassword) {
      throw new Error("User password incorrect");
    }

    const accessToken = jwtProvider.generateAccessToken(currentUser);

    return { accessToken, currentUser };
  }

  // logout

  // get all users
  async getAllUsers() {
    return await userRepository.readAllUsers();
  }
  // update user
  // delete user
}
module.exports = new UserService();
//
