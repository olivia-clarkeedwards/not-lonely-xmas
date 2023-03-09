// const inputTable = require('./routes/routes')

const tables = ['loners', 'families']

function validateTableName(inputTable) {
  if (tables.includes(inputTable)) {
    return inputTable
  } else {
    return 'families'
  }
}

module.exports = { validateTableName }
