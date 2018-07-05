module.exports = (req, res, next) => {
  if (!req.session.users) {
    req.session.users = [];
  }
  next();
};
