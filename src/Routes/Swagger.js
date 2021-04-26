const router = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
// const swaggerConfig = YAML.load('../../swagger.yaml')

// router.use('/', swaggerUi.serve, swaggerUi.setup(swaggerConfig));

module.exports = router;
