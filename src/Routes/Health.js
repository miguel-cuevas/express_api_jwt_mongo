const router = require('express').Router();

router.get('/', function(_, res) {
  res.status(200).send('OK');
});

module.exports = router;
