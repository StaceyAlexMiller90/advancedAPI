const express = require("express");
const app = express();
const port = 3000;

const middleWareFunction = (req, res, next) => {
  const currentdate = new Date(); 
  res.setHeader('X-Codaisseur-Time', currentdate);
  console.log(currentdate)
  next()
}

app.use(middleWareFunction)

const failRandomlyMiddleware = (req, res, next) => {
  const number = Math.random()
  number > 0.5 ? next() : res.status(500).send()
}

app.get("/", failRandomlyMiddleware, (req, res) => res.send("Hello"));

app.get("/foo", (req, res) => res.send("Foo"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));