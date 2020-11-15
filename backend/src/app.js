const express = require('express');
const morgan = require('morgan');
const compression = require('compression');
const helmet = require('helmet');

const middlewares = require('./middleware/middlewares');
const api = require('./api');

const app = express();

app.use(morgan('tiny'));
app.use(compression());
app.use(helmet());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: '🎂 Testing Application',
  });
});

app.use('/api/v1', api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandling);

module.exports = app;
