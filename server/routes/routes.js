const express = require('express')
const { validateTableName } = require('../helpers')

const db = require('../db/db')

const router = express.Router()

router.get('/', (req, res) => {
  res.render('home')
})

router.get('/all/:table', (req, res) => {
  const table = validateTableName(req.params.table)

  db.getAll(table)
    .then((unmatched) => {
      const dataObj = {
        unmatched,
      }

      if (table === 'loners') {
        // res.send(unmatched)
        //Uncomment line below once view created
        res.render('allLoners', dataObj)
      } else {
        // res.send(unmatched)
        //Uncomment line below once view created
        res.render('allFamilies', dataObj)
      }
    })
    .catch((err) => {
      console.log(err.message)
    })
})

router.get('/loner/:name', (req, res) => {
  let name = req.params.name
  const nameData = capitalise(name)
  db.getLoner(nameData)
    .then((loner) => {
      console.log(loner)
      res.render('lonerDetail', loner)
    })
    .catch((err) => {
      console.log('ohhh noooo', err.message)
    })
})

router.get('/family/:name', (req, res) => {
  let name = req.params.name
  const nameData = capitalise(name)
  db.getFamily(nameData)
    .then((family) => {
      res.render('familyDetail', family)
    })
    .catch((err) => {
      console.log('ohhh noooo', err.message)
    })
})

function capitalise(name) {
  return name[0].toUpperCase() + name.substring(1)
}

module.exports = router
