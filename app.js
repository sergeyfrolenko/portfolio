const express = require("express");
const app = express();
const bodyParser = require("body-parser"); // for decode post data
const Post = require('./model/post')

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

const arr = [1, 2, 3];

app.get("/", function (req, res) {
  res.render("index", {
    text: "Hello from index.js",
    arr: arr,
  });
});
app.get("/create", function (req, res) {
  res.render("create");
});
app.post("/create", function (req, res) {
  // arr.push(req.body.text);
    
  res.redirect("/");
});

module.exports = app;
