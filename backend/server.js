require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const app = express();

// Import routes
const notesRoute = require("./routes/notesRoute");

const PORT = process.env.PORT;

// Middleware for Request objects with json contents
app.use(express.json());

// Middleware for intercepting each requests
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Use all routes
app.use(notesRoute);

mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    console.log("Connected successfully!");
    // Start the server
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
