const router = require('express').Router();

const Health = require('./Health');
const Request = require('./Request');
const Auth = require('./Auth');
const User = require('./User');
const Swagger = require('./Swagger');

router.use('/health', Health);
router.use('/request', Request);
router.use('/auth', Auth);
router.use('/user', User);

// router.use('/api-docs', Swagger);

module.exports = router;