const router = require("express").Router();
const fs = require("fs");
const db = require("../db/db.json");

router.get("/notes", (req, res) => {
  res.json(db);
});

router.post("/notes", (req, res) => {
  console.log(req.params);
  res.json("Yes she is");
});

router.delete("/notes/:id", (req, res) => {
  console.log(req.params);
  res.json("Yes she is");
});

module.exports = router;
