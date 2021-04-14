const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(8081, () => {
  console.log('Server listening at port 8081...');
});
