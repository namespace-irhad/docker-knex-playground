const express = require('express');
const bcrypt = require('bcrypt');
const yup = require('yup');
const User = require('../users/model');
const jwt = require('../../lib/jwt');

const router = express.Router();

const schema = yup.object().shape({
  password: yup.string()
    .min(8)
    .required()
    .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, 'Must have a lowercase,uppercase character and a number'),
  name: yup.string().trim().min(4).matches(/\w+/i)
    .required(),
  email: yup.string().trim().email().required(),
});

router.post('/register', async (req, res, next) => {
  const { name, email, password } = req.body;
  const createdUser = { name, password, email };
  try {
    await schema.validate(createdUser, { abortEarly: false });
    const existingUser = await User.query().where({ email }).first();
    if (existingUser) {
      const error = new Error('Email in Use.');
      res.status(422);
      throw error;
    } else {
      // TODO Password Bcrypt Util js file
      const hashedPassword = await bcrypt.hash(password, 12);
      const insertedUser = await User.query()
        .insert({ username: name, email, password: hashedPassword });
      delete insertedUser.password;
      const token = await jwt.login(
        { id: insertedUser.id, username: insertedUser.username, email: insertedUser.email },
      );
      res.json({ user: insertedUser, token });
    }
  } catch (error) {
    next(error);
  }
});

router.post('/login', async (req, res, next) => {
  const { email, password } = req.body;
  try {
    await schema.validate({ name: 'User', email, password }, { abortEarly: false });
    const existingUser = await User.query().where({ email }).first();
    if (!existingUser) {
      const error = new Error('Invalid Login.');
      res.status(401);
      throw error;
    } else {
      const validPassword = await bcrypt.compare(password, existingUser.password);
      if (!validPassword) {
        const error = new Error('Invalid Login.');
        res.status(401);
        throw error;
      }
      const token = await jwt.login(
        { id: existingUser.id, username: existingUser.username, email: existingUser.email },
      );
      res.json({ user: existingUser, token });
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
