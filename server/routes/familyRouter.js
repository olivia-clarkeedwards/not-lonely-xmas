const express = require('express')
const { capitalise } = require('../helpers')
const db = require('../db/db')
const router = express.Router()

router.get('/signup', (req, res) => {
  res.render('familySignUp')
})

router.post('/signup', (req, res) => {
  const { surname, size, location, smokers, pets, description } = req.body
  const newFamily = {
    surname: capitalise(surname),
    size: size,
    location: location,
    description: description,
    is_matched: false,
    smokers: Boolean(smokers) && true,
    pets: Boolean(pets) && true,
  }

  db.addNewFamily(newFamily)
    .then(() => {
      res.redirect('/all/families')
    })
    .catch((err) => {
      console.log('ohhh noooo', err.message)
    })
})

router.get('/:id', async (req, res) => {
  const id = Number(req.params.id)

  try {
    const family = await db.getFamily(id)
    const loner = await db.getAll('loners')

    const data = {
      family,
      loner,
    }

    res.render('familyDetail', data)
  } catch (error) {
    console.log('ohhh noooo', error.message)
  }
})

module.exports = router
