const router = require("express").Router();

// GET Route for homepage
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

// GET Route for feedback page
router.get("/feedback", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/pages/feedback.html"))
);

// Wildcard route to direct users to a 404 page
//
// app.get("*", (req, res) =>
//   res.sendFile(path.join(__dirname, "public/pages/404.html"))
// );

module.exports = router;
