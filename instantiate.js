const express = require("express");
const { Router } = express;
const app = express();
const port = 4000;

const router = new Router();

router.get("/hi/:name", (request, response) => {
  const name = request.params.name
  response.send(`Hi! ${name}`)
})

app.use(router)

app.listen(port, () => console.log(`Listening on port ${port}!`));


