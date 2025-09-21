// Middleware for logging each requests
// Make sure to always use next(), to prevent middlewares from hanging
const logger = (req, res, next) => {
  console.log(req.path, req.method);
  next();
};

module.exports = logger;
