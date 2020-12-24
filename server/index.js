// Set up an Express server in this file
// Incorporate body-parser (for JSON) and morgan (using its predefined development format)
const express = require('express');
const router = require('./routes.js');
const app = express();

const morgan = require('morgan');
const bodyParser = require('body-parser');

app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/', router);


const port = 8888;
app.listen(port, () => {
  console.log(`Listening at port ${port}`);
})

