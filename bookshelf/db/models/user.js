// id, username, email, is_admin
const bookshelf = require('../../server/db-config')

const User = bookshelf.model('User', {
  tableName: 'users',
  hasTimestamps: true,
})
