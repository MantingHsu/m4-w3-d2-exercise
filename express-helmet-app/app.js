"use strict";

const express = require("express");
const helmet = require("helmet");
const app = express();
const PORT = 3000;

app.use(helmet());

app.get("/", (req, res) => {
  res.send("Hello from Helmet-secured Express App!");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
