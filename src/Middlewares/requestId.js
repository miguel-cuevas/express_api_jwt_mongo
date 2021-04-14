const { v4: uuidv4 } = require('uuid');

module.exports = (req, _, next) => {
  console.log('middleware')
  req.requestId = uuidv4();
  next();
};