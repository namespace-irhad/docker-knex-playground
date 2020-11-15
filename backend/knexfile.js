// Update with your config settings.

require('dotenv').config();

module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      port: '3360',
      database: process.env.MYSQL_DATABASE,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
    },
    migrations: {
      directory: './db/migrations',
    },
    seeds: {
      directory: './db/seeds',
    },
  },
  test: {
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      port: '3360',
      database: process.env.MYSQL_DATABASE,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
    },
    migrations: {
      directory: './db/migrations',
    },
    seeds: {
      directory: './db/seeds',
    },
  },
};
