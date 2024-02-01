const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hi there !!");
});
app.get("/bye", (req, res) => {
  res.send("Bye there !!");
});

app.listen(8080, () => {
  console.log("listeneing on 8080 !!");
});
