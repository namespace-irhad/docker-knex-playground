const db = require('../../../db');

module.exports = {
  findUsers() {
    return db('user');
  },
  findCountries() {
    return db('country');
  },
  findCities() {
    return db('city')
      .join('country', 'country.id', 'city.country_id')
      .select(['city.name AS city', 'city.capital', 'country.name AS country']);
  },
};
