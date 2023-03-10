const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getAll,
  getLoner,
  getFamily,
  addNewFamily,
}

function getAll(tableName, db = connection) {
  return db(tableName)
    .select()
    .where(tableName + '.is_matched', false)
}

function getLoner(firstName, db = connection) {
  return db('loners').select().where('first_name', firstName).first()
}

function getFamily(surname, db = connection) {
  return db('families').select().where('families.surname', surname).first()
}

function addNewFamily(newFamily, db = connection) {
  return db('families').insert(newFamily)
}
