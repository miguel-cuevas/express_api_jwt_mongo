const { body } = require('express-validator');

exports.validateCreateUser = () => {
  return [
    body('firstName')
      .exists()
      .isString()
      .withMessage('First name value is invalid'),
    body('lastName')
      .exists()
      .isString()
      .withMessage('Last name value is invalid'),
    body('email')
      .exists()
      .isString()
      .isEmail()
      .withMessage('Email address is not valid'),
    body('password')
      .exists()
      .isString()
      .isLength({ min: 4, max: 12})
  ];
};
