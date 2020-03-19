const express = require ('express')
const {Router} = express

const teachers = ["rein", "kelley", "david"]

const router = new Router()

router.get('/teachers', (req, res) => {
  res.send(teachers)
})

module.exports = router