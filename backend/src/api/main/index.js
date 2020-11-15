const express = require('express');

const router = express.Router();

const controller = require('./controllers');

router.get('/', controller.getAllUsers);
router.get('/country', controller.getAllCountries);
router.get('/city', controller.getAllCities);
router.get('/country/:id', controller.getAllCountries);
router.get('/city/:id', controller.getAllCities);

module.exports = router;
