const router = require("express").Router();
const fs = require("fs");
const notes = require("../db/db.json");

router.get("/notes", (req, res) => {
  // let oneNote;
  // for (let i = 0; i < notes.length; i++) {
  //   if (notes[i].id === req.params.id) {
  //     oneNote = notes[i];
  //   }
  // }
  res.json(notes);
});

// router.get("/notes", (req, res) => {
//   res.json(notes);
// });

router.post("/notes", (req, res) => {
  req.body.id = (notes[notes.length - 1]?.id || 0) + 1;
  console.log(req.body);
  notes.push(req.body);
  fs.writeFile("./db/db.json", JSON.stringify(notes, null, "\t"), (err) => {
    err ? console.log(err) : console.log("File successfully written");
  });
  console.log(notes);
  res.json("hey");
});

router.delete("/notes/:id", ({ params }, res) => {
  console.log(params.id);
  for (i = 0; i < notes.length; i++) {
    console.log(params.id == notes[i].id);
    if (params.id == notes[i].id) {
      notes.splice(i, 1);
      i--;
    }
  }
  fs.writeFile("./db/db.json", JSON.stringify(notes, null, "\t"), (err) => {
    err ? console.log(err) : console.log("File successfully written");
  });
  res.json(notes);
});

module.exports = router;
