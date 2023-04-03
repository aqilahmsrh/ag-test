var express = require("express");

var app = express();

app.get("/", function (req, res) {
  res.send("Hello ReGov");
});

app.get("/info", (req, res) => {
  res.send("hey this is /info api");
});

app.listen(8080, function () {
  console.log("listening");
});
