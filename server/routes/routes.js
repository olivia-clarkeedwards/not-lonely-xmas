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

router.get('/match/:family', async (req, res) => {
  const familyId = req.params.family
  const family = await db.confirmMatch(familyId)

  res.render('match', family)
})

module.exports = router
