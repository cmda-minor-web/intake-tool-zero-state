const express = require('express')
const router = express.Router()

router.get('/:id', function(req, res) {
    res.render('index', { title: 'Resultaten', id: req.params.id })
})

module.exports = router
