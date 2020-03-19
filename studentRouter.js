const express = require ('express')
const {Router} = express

const students = ["stacey", "json", "sten"]

const router = new Router()

router.get('/students', (req, res) => {
  res.send(students)
})

module.exports = router