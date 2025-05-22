import express from "express";
import router from "./src/route/route.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Babe!");
});

app.get("/second-route", (req, res) => {
  res.send("Response from second route!");
});

app.get("/third-route", (req, res) => {
  res.send("Response from third route!");
});

app.listen(3000);

console.log("Server running on port 3000");
