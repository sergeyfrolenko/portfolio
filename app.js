const express = require("express");
const app = express();
const bodyParser = require("body-parser"); // for decode post data
const Post = require("./models/post");
const path = require("path");
const staticAsset = require("static-asset");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(staticAsset(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname + "/public")));
app.use("/markup", express.static(path.join(__dirname + "/dest")));
app.use(
  "/javascripts",
  express.static(path.join(__dirname, "node_modules", "jquery", "dist"))
);

// const arr = [1, 2, 3];

app.get("/", function (req, res) {
  Post.find().then((posts) => {
    res
      .render("index", {
        text: "Hello from index.js",
        posts: posts,
      })
      .catch((e) => {
        console.log(e);
      });
  });
});
app.get("/create", function (req, res) {
  res.render("create");
});
app.post("/create", function (req, res) {
  // arr.push(req.body.text);
  const { title, body } = req.body;
  Post.create({
    title: title,
    body: body,
  });
  res.redirect("/");
});
app.get("/login", (req, res) => {
  res.render("login");
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handler
// eslint-disable-next-line no-unused-vars
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.render("error", {
    message: error.message,
    error: error,
  });
});

module.exports = app;
