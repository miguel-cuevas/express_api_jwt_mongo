const express = require('express');

const requestId = require('./src/Middlewares/requestId');

const routes = require('./src/Routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(requestId);
app.use(routes);

app.listen(8081, () => {
  console.log('Server listening at port 8081...');
});
