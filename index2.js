const express = require ('express')
const students= require('./studentRouter')
const teachers = require('./teacherRouter')

const app = express()

const PORT = 4000

app.use(students)
app.use(teachers)

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));