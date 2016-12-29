const path = require('path');
const express = require('express');
const app = express();
require('./hostRouter')(app);
require('node-jsx').install();
const port = 3000;

// set up ejs for templating. You can use whatever
app.set('view engine', 'ejs');

app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});

