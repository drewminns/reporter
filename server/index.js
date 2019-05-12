const express = require('express');
const cors = require('cors');

const config = require('../config');

const app = express();

app.get('/', (req, res) => {
  res.json({working: true});
});

app.listen(config.SERVER_PORT);
