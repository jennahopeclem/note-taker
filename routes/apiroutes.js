const router = require("express").Router();
const fs = require("fs");
const { notes } = require("../db/db.json");
const { noteCreateNewNote, noteDeletenote } = require("../routes");

router.get("/notes", (req, res) => {
  let saved = notes;
  res.json(saved);
});

router.post("/notes", (req, res) => {
  req.body.id = notes.length.toString();
  let note = noteCreateNewNote(req.body, notes);
  res.json(note);
});

router.delete("/notes/:id", (req, res) => {
  noteDeletenote(notes, req.params.id);
  res.json(notes);
});

module.exports = router;
