exports.seed = async (knex) => {
  await knex('city').insert([
    {
      name: 'Sarajevo',
      capital: true,
      country_id: knex('country').where({ name: 'BA' }).select('id'),
    },
  ]);
};
