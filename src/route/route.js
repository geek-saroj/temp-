import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello Babe from route file!");
});

export default router;
