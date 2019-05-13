const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const { SERVER_PORT, IS_PROD } = require('./config');

const app = express();

app.use(morgan(IS_PROD ? 'combined' : 'dev'));

app.get('/', (req, res) => {
  res.json({ working: false });
});

// eslint-disable-next-line no-console
app.listen(SERVER_PORT || 5000, () => console.log(`Listening at http://localhost:${SERVER_PORT}`),);
