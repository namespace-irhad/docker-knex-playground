const express = require('express');
const yup = require('yup');

const main = require('./main');
const authRoutes = require('./auth/auth-routes');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: '🎉API Version 1',
  });
});

router.use('/playground', main);
router.use('/auth', authRoutes);

module.exports = router;
