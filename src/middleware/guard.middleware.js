const guardMiddleWare = (roles) => (req, res, next) => {
  // THis our guard

  const currentLoginUserRole = req.user.role;
  console.log("Current User role", currentLoginUserRole);
  if (!roles.includes(currentLoginUserRole)) {
    res.status(401).json({ message: "You aren't permitted for this access" });
  }
  next();
};

module.exports = guardMiddleWare;

// function curriedMultiply(a) {A
//   return function(b) {
//     return a * b;
//   };
// }
//   return function(b) {
//     return 2 * 3;
//   };
// 6
// curriedMultiply(2)(3); // 6

// const double = curriedMultiply(2);
// double(10); // 20
//
