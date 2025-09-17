require("dotenv").config();

const express = require("express");


const app = express();

// Middleware for logging each requests
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});


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
