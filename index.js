var express = require("express");

var app = express();

app.get("/", function (req, res) {
  res.send("welcome to express app!!");
});

app.get("/info", (req, res) => {
  res.send("hey this is /info api");
});

app.listen(80, function () {
  console.log("listening");
});