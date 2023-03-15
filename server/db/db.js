const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getAll,
  getLoner,
  getFamily,
  addNewFamily,
  // matchWithFamily,
  addMatchIds,
  addNewLoner,
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
  //check if family already appears in the database
  return db('families').insert(newFamily)
}

function addNewLoner(newLoner, db = connection) {
  return db('loners').insert(newLoner)
}

// function matchWithFamily(lonerName, db = connection) {
//   return db('families')
//     .select(
//       'families.surname',
//       'families.location AS family_location',
//       'loners.first_name'
//     )
//     .join('loners', 'families.loner_id', 'loners.id')
// }

function addMatchIds(famId, lonerId, db = connection) {
  db('families').select().first().where('families.id', famId)
}
