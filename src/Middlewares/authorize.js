const jwt = require('jsonwebtoken');
const config = require('../Config');
// const db = require('../Models');
const logger = require('../Config/Logger');
// const User = db.user;

const authorize = (req, res, next) => {
  const { authorization } = req.headers;
  if (authorization) {
    jwt.verify(authorization, config.jwt.secret, (err, usr) => {
      if (err) {
        req.user = undefined;
        logger.error(req, `Error while verifying token`, err);
        return res.status(403).send({ auth: false, message: 'Unable to verify token.' });
      }
      req.user = usr;
      next();
    });

  } else {
    req.user = undefined;
    return res.status(401).send({ auth: false, message: 'No token provided.' });
  }
}

module.exports = authorize;