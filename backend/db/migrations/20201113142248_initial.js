const Knex = require('knex');

/**
 *
 * @param {Knex} knex
 */

function addDefaultColumns(table) {
  table.timestamps(false, true);
  table.datetime('deleted_at');
}

exports.up = async (knex) => {
  await knex.schema.createTable('user', (table) => {
    table.increments().notNullable();
    table.string('email', 254).notNullable().unique();
    table.string('username').notNullable();
    table.string('password', 127).notNullable();
    table.datetime('created_at').notNullable().defaultTo(knex.fn.now());
  });
  await knex.schema.createTable('country', (table) => {
    table.increments().notNullable();
    table.string('name').notNullable();
    addDefaultColumns(table);
  });
  await knex.schema.createTable('city', (table) => {
    table.increments().notNullable();
    table.string('name').notNullable();
    table.boolean('capital').defaultTo(false);
    table
      .integer('country_id')
      .unsigned()
      .references('id')
      .inTable('country')
      .onDelete('cascade');
    addDefaultColumns(table);
  });
};

exports.down = async (knex) => {
  await Promise.all(
    ['user', 'country', 'city'].map((tableName) =>
      knex.schema.dropTable(tableName)
    )
  );
};
