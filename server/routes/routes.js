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
        res.render('allLoners', dataObj)
      } else {
        res.render('allFamilies', dataObj)
      }
    })
    .catch((err) => {
      console.log(err.message)
    })
})

// router to get to the confirmation page
// call a db function where

// router.post('/match', (req, res) => {
//   const surname = req.body.surname
//   const first_name = req.body.first_name

//   let familyId
//   let lonerId

//   db.getFamily(surname)
//     .then((family) => {
//       familyId = family.id

//       db.getLoner(first_name)
//         .then((loner) => {
//           lonerId = loner.id
//         })
//         .catch((err) => {
//           console.log(err.message)
//         })
//     })
//     .catch((err) => {
//       console.log(err.message)
//     })
// })

// db.getLoner(first_name)
//   .then((loner) => {
//   lonerId = loner.id
//   db.addMatchIds(familyId, lonerId)
// })

module.exports = router
