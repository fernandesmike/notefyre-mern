require("dotenv").config();
const express = require("express");



const app = express();
const PORT = process.env.PORT;

// Middleware for logging each requests
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.get("/", (req, res) => {
  res.json({ msg: "test" });
});

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
