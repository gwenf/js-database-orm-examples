const knex = require('knex')({
    client: 'postgres',
    connection: {
      host: '127.0.0.1',
      user: 'todotest_admin',
      password: 'hellomotto',
      database: 'todotest',
      charset: 'utf8'
    }
  })

module.exports = require('bookshelf')(knex)
