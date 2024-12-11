 
const express = require("express");
require("express-async-errors");

const routes = require("./routes.js");

const app = express();

app.use(express.json());
app.use(routes);
app.use((error, request, response, next) => {
  console.log("==============ERROR=================");
  console.log(error);
  console.log("====================================");
  response.sendStatus(500);
});

app.listen(3000, () => console.log("Servidor rodando na porta http://localhost:3000"));
