const express = require('express')
const { capitalise } = require('../helpers')
const db = require('../db/db')
const router = express.Router()

/* SIGN UP TO BE LONER */
router.get('/signup', (req, res) => {
  res.render('lonerSignUp')
})

/* PROCESS LONER SIGN UP FORM */
router.post('/signup', async (req, res) => {
  const { first_name, age, location, description } = req.body
  const newLoner = {
    first_name: capitalise(first_name),
    age: age,
    location: location,
    description: description,
    is_matched: false,
  }
  try {
    await db.addNewLoner(newLoner)
    res.redirect('/all/loners')
  } catch (error) {
    console.log('ohhh noooo', error.message)
  }
})

/* SINGLE LONER DETAILS */
router.get('/:id', async (req, res) => {
  let id = Number(req.params.name)

  try {
    const loner = await db.getLoner(id)
    const family = await db.getAll('families')
    const data = {
      loner,
      family,
    }
    res.render('lonerDetail', data)
  } catch (error) {
    console.log('ohhh noooo', error.message)
  }
})

module.exports = router
