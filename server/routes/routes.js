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
  const name = req.params.name
  db.getLoner(name)
    .then((loner) => {
      res.send(loner)
    })
    .catch((err) => {
      console.log('ohhh noooo', err.message)
    })
})

module.exports = router
