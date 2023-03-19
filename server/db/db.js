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
  setLonerIsMatched,
  setFamilyIsMatched,
}

function getAll(tableName, db = connection) {
  return db(tableName)
    .select()
    .where(tableName + '.is_matched', false)
}

function getLoner(id, db = connection) {
  return db('loners').select().where('loners.id', id).first()
}

function getFamily(id, db = connection) {
  return db('families').select().where('families.id', id).first()
}

function addNewFamily(newFamily, db = connection) {
  return db('families').insert(newFamily)
}

function addNewLoner(newLoner, db = connection) {
  return db('loners').insert(newLoner)
}

function setLonerIsMatched(familyId, id, db = connection) {
  return db('loners').where('id', id).update({
    is_matched: true,
  })
}

function setFamilyIsMatched(lonerId, id, db = connection) {
  return db('families').where('id', id).update({
    is_matched: true,
  })
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
