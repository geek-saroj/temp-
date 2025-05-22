import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello Babe from route file!");
});

router.get("/about", (req, res) => {
  res.send("Hello Babe from about page!");
});

export default router;
