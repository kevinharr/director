const router = require('express').Router()
const directorsCtrl = require('../controllers/directors.js')

router.post('/', directorsCtrl.create)
router.get('/', directorsCtrl.index)
router.put('/:id', directorsCtrl.update)
router.delete('/:id', directorsCtrl.delete)

router.post('/:id/movies', directorsCtrl.addMovie)

module.exports = router