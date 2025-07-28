const jwtProvider = require("../provider/jwt.provider");
const authMiddleware = (req, res, next) => {
  // get the token
  const authHeader = req.headers["authorization"];
  console.log("Authentication-Header", authHeader);
  const token = authHeader && authHeader.split(" ")[1];
  console.log("Token", token);
  // Token might be empty
  if (!token) {
    res
      .status(401)
      .json({ message: "No Token Unauthorized/Unauthenticated  User" });
  }
  // decode the token with the Private key
  // This will give us the payload
  const decodedToken = jwtProvider.verifyToken(token);
  console.log("Decoded Token", decodedToken);
  // get the role
  req.user = decodedToken
  // role
  next();
};

module.exports = authMiddleware;
// const authGuard
//
