const router = require('express').Router();
const auth = require('../Middlewares/authorize');

const user = require('../Controllers/User.controller');
const validate = require('../Validators');
const { validateCreateUser } = require('../Validators/User.validators');

router.get('/all', user.getAll);
router.post('/', auth, validateCreateUser(), validate, user.createUser);

module.exports = router;
