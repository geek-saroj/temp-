import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Babe!");
});

app.get("/second-route", (req, res) => {
  res.send("Response from second route!");
});

app.get("/sixth-route", (req, res) => {
  res.send("Response from sixth route!");
});

app.listen(3000);

console.log("Server running on port 3000");
