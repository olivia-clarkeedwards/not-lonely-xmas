const express = require('express')
const { capitalise } = require('../helpers')
const db = require('../db/db')
const router = express.Router()

/* SIGN UP TO BE LONER */
router.get('/signup', (req, res) => {
  res.render('lonerSignUp')
})

/* PROCESS LONER SIGN UP FORM */
router.post('/signup', (req, res) => {
  const { first_name, age, location, description } = req.body
  const newLoner = {
    first_name: first_name,
    age: age,
    location: location,
    description: description,
    is_matched: false,
  }

  db.addNewLoner(newLoner)
    .then(() => {
      res.redirect('/all/loners')
    })
    .catch((err) => {
      console.log('ohhh noooo', err.message)
    })
})

/* SINGLE LONER DETAILS */
router.get('/:name', (req, res) => {
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

module.exports = router
