// Update with your config settings.
require('dotenv').config()
var pg = require('pg')
pg.defaults.ssl=true

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'test2'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: 'process.env.DATABASE_URL',
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
