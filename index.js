require("dotenv").config();
const express = require("express");
const connetTodb = require("./database/db");
const patch = require("path");
const Music = require("./model/Music");

const app = express();
const port = process.env.port || 3000;

app.set("view engine", "ejs");
app.use(express.static(patch.join(__dirname, "public")));
app.use(express.urlencoded());

connetTodb();

app.get("/", async (req, res) => {
  const playlist = await Music.find();

  res.render("index", { playlist });
});

app.get("/admin", (req, res) => {
  res.render("admin");
});

app.post("/create", async (req, res) => {
  const music = req.body;
  await Music.create(music);
  res.redirect("/");
});

app.listen(
  port,
  console.log(`Servidor em Funcionamento http://localhost:${port}}`)
);
