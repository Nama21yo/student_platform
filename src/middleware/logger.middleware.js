const loggerMiddleWare = (req, res, next) => {
  console.log(`${new Date()} ${req.body}`);
  // implement middleware
  next();
};
module.exports = loggerMiddleWare;
//
