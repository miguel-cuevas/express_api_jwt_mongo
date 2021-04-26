const User = require('../Models/user.model');
const logger = require('../Config/Logger');
exports.createUser = (req, res) => {
  const { body } = req;
  const user = new User({
    ...body,
  });
  user.save((err, user) => {
    if (err) {
      logger.error(req, `Error creating user`, err)
      return res.status(400).send({
        message: err
      });
    } else {
      user.password = undefined;
      logger.info(req, `User created: ${JSON.stringify(user)}`);
      return res.json(user);
    }
  });
}
exports.getAll = (_, res) => {
  User.find((_, users) => {
    res.status(200).json(users);
  });
};