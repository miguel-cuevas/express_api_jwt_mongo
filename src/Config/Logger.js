const winston = require('winston');

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
  ]
})

module.exports = {
  info: (req, message) => logger.info(`[${req.requestId}] - ${message}`),
  error: (req, message, err) => logger.error(`[${req.requestId}] - ${message} - ${JSON.stringify(err)}`)
}