const router = require('express').Router();
const { login } = require('../Controllers/Auth.controller');

router.post('/login', login);

module.exports = router;
