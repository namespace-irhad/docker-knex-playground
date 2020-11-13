const express = require('express');

const main = require('./main');

const router = express.Router();

router.use('/playground', main);

module.exports = router;