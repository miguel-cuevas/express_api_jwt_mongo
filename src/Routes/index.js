const router = require('express').Router();

const Health = require('./Health');
const Request = require('./Request');

router.use('/health', Health);
router.use('/request', Request);

module.exports = router;