const bcrypt = require('bcrypt');
const crypto = require('crypto');

const orderedTableNames = ['user', 'city', 'country'];

exports.seed = async (knex) => {
  // Deletes ALL existing entries
  await orderedTableNames.reduce(async (promise, tableName) => {
    await promise;
    console.log('Deleting table', tableName);
    return knex(tableName).del();
  }, Promise.resolve());

  const password = crypto.randomBytes(15).toString('hex');
  const user = {
    email: 'irhad.fejzic@null.com',
    username: 'Fizo',
    password: await bcrypt.hash(password, 12),
  };

  console.log('User password: ', password);
  await knex('user').insert(user);

  await knex('country').insert([
    { name: 'US' },
    { name: 'CA' },
    { name: 'BA' },
    { name: 'CO' },
  ]);
};
