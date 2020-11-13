exports.seed = async (knex) => {
  await knex('country').insert([
    { name: 'US' },
    { name: 'CA' },
    { name: 'BA' },
    { name: 'CO' },
  ]);
};
