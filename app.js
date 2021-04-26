const express = require('express');
const requestId = require('./src/Middlewares/requestId');
const routes = require('./src/Routes');
const init = require('./src/Config/init');
const app = express();

const logger = require('./src/Config/Logger');

const configs = require('./src/Config');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(requestId);

app.use((req, _, next) => {
  if (req.path !== '/health') {
    logger.info(req, `${req.method} ${req.path}`);
  }
  next();
})

app.use(routes);

init().then(() => {
  app.listen(configs.app.port, () => {
    console.log(`Starting ${configs.app.env} server at port ${configs.app.port}...`);
  });
});
