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

router.get('/family/signup', (req, res) => {
  res.render('familySignUp')
})

router.post('/family/signup', (req, res) => {
  const { surname, size, location, smokers, pets, description } = req.body
  console.log(req.body)
  const newFamily = {
    surname: surname, //capitalise first letter of surname before adding family to db
    size: size,
    location: location,
    description: description,
    is_matched: false,
    smokers: Boolean(smokers),
    pets: Boolean(pets),
  }

  db.addNewFamily(newFamily)
    .then(() => {
      res.redirect('/all/families')
    })
    .catch((err) => {
      console.log('ohhh noooo', err.message)
    })
})

router.get('/loner/signup', (req, res) => {
  res.render('lonerSignUp')
})

router.post('/loner/signup', (req, res) => {
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

router.get('/family/:name', (req, res) => {
  let name = req.params.name
  const nameData = capitalise(name) ///problem~!!!!
  db.getFamily(nameData)
    .then((family) => {
      console.log(family)
      res.render('familyDetail', family)
    })
    .catch((err) => {
      console.log('ohhh noooo', err.message)
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

function capitalise(name) {
  return name[0].toUpperCase() + name.substring(1)
}

// router to get to the confirmation page
// call a db function where

router.post('/match', (req, res) => {
  const surname = req.body.surname
  const first_name = req.body.first_name

  let familyId
  let lonerId

  db.getFamily(surname)
    .then((family) => {
      familyId = family.id

      db.getLoner(first_name)
        .then((loner) => {
          lonerId = loner.id
        })
        .catch((err) => {
          console.log(err.message)
        })
    })
    .catch((err) => {
      console.log(err.message)
    })
})

// db.getLoner(first_name)
//   .then((loner) => {
//   lonerId = loner.id
//   db.addMatchIds(familyId, lonerId)
// })

module.exports = router
