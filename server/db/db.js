const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getAll,
  getLoner,
}

function getAll(tableName, db = connection) {
  return db(tableName)
    .select()
    .where(tableName + '.is_matched', false)
}

function getLoner(firstName, db = connection) {
  return db('loners').select().where('loners.first_name', firstName).first()
}
