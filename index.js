const express = require('express')
const router = require('./router')
const app = express()

const PORT = 4000

app.use(router)

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));