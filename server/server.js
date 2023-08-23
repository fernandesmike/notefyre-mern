require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Import routes
const notesRoute = require("./routes/notesRoute");

const app = express();

// Middleware for logging each requests
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Middleware for Request objects with json contents
// And to allow cross origin access
app.use(express.json());
app.use(cors());

// Use all routes
app.use(notesRoute);

const PORT = process.env.PORT;

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
