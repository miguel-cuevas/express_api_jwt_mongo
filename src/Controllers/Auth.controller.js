const jwt = require('jsonwebtoken');
const configs = require('../Config');
const logger = require('../Config/Logger');
const User = require('../Models/user.model');

exports.login = (req, res) => {
  const { body } = req;
  User.findOne({ email: body.email }, (err, user) => {
    if (err) {
      logger.error(req, `Error while authenticating`, err);
      throw err;
    }
    if (!user) {
      return res.status(401).json({ message: 'Authentication failed. Invalid user.' });
    }
    if (user.comparePassword(body.password)) {
      return res.status(401).json({ message: 'Authentication failed. Invalid password.' });
    }
    return res.json({ token: jwt.sign({ email: user.email, _id: user._id }, configs.jwt.secret) });
  });
}