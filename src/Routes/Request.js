const router = require('express').Router();

router.get('/', function(req, res) {
  res.status(200).send(req.requestId);
})

module.exports = router;