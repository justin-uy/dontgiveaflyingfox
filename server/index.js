const express = require('express');
const app = express();
require('./hostRouter')(app);
require('node-jsx').install();
const port = 3000;

app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});

