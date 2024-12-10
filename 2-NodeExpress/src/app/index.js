const express = require("express");

const routes = require("./routes.js")

const app = express();

app.use(express.json());
app.use(routes);

// eslint-disable-next-line no-undef
app.listen(3000, () => console.log("Servidor rodando na porta http://localhost:3000"));
