const queries = require('../models/user');

const getAllUsers = async (req, res, next) => {
  const users = await queries.findUsers().select('email', 'username');
  res.json(users);
};

const getAllCountries = async (req, res, next) => {
  const { id } = req.params;
  if (id) {
    const country = await queries.findCountries().where({ id });
    return res.json(country);
  }
  const countries = await queries.findCountries();
  return res.json(countries);
};

const getAllCities = async (req, res, next) => {
  const { id } = req.params;
  if (id) {
    const city = await queries.findCities().where({ id });
    return res.json(city);
  }
  const cities = await queries.findCities();
  return res.json(cities);
};

module.exports = {
  getAllUsers,
  getAllCountries,
  getAllCities,
};
