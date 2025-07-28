const jwt = require("jsonwebtoken");

const generateAccessToken = (user) => {
  // we have 3
  // header, payload, signature
  // payload = actual data
  // jwt.sign(payloadata,private_Key , expired_data: 15min)
  //   const {id , role} = user
  return jwt.sign(
    { id: user._id, role: user.role },
    process.env.access_Token_private_key,
    { expiresIn: "15m" }
  );
};

// verify a given accessToken
const verifyToken = (token) => {
  return jwt.verify(token, process.env.access_Token_private_key);
};
// refreshToken
module.exports = { generateAccessToken, verifyToken };
//
