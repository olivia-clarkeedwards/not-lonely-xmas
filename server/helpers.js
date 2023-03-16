// const inputTable = require('./routes/routes')

const tables = ['loners', 'families']

function validateTableName(inputTable) {
  if (tables.includes(inputTable)) {
    return inputTable
  } else {
    return 'families'
  }
}

function capitalise(name) {
  return name[0].toUpperCase() + name.substring(1)
}

module.exports = { validateTableName, capitalise }
