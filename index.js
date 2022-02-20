require("dotenv").config();
const express = require("express");
const connetTodb = require('./database/db')

const app = express();
const port = process.env.port || 3000;

connetTodb();

app.get("/", (req, res) => {
  res.send("Hello Word");
});

app.listen(
  port,
  console.log(`Servidor em Funcionamento http://localhost:${port}}`)
);
