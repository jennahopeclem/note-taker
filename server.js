const express = require("express");
const path = require("path");
const util = require("util");

const apiRoutes = require("./routes/apiroutes");
const htmlRoutes = require("./routes/htmlroutes");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static("public"));
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
