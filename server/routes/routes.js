const express = require('express')

const db = require('../db/db')

const router = express.Router()

router.get('/', (req, res) => {
  res.render('home')
})

router.get('/all/:table', (req, res) => {
  const table = req.params.table
  console.log(table)
  res.send('hi')
  db.getAll(table)
    .then((result) => {
      console.log(result)
    })
    .catch((err) => {
      console.log(err.message)
    })
})

module.exports = router
