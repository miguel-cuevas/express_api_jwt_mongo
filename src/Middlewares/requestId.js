const { v4: uuidv4 } = require('uuid');

module.exports = (req, _, next) => {
  req.requestId = uuidv4();
  next();
};