const express = require("express");
const router = express.Router();

// Get all notes handler
router.get("/", (req, res) => {
  res.json({
    msg: "Welcome back!",
    version: "V1",
    year: "2025",
    route: "/",
  });
});

// Get a single note handler
router.get("/:id", (req, res) => {
  res.json({
    msg: "You requesting for a specific note!",
    version: "V1",
    year: "2025",
    route: "/:id",
  });
});

// Add a new note handler
router.post("/", (req, res) => {
  res.json({
    msg: "You are adding a specific note!",
    version: "V1",
    year: "2025",
    route: "/:id",
  });
});

// Replace an existing note handler
router.put("/:id", (req, res) => {
  res.json({
    msg: "You are replacing n existing note!!",
    version: "V1",
    year: "2025",
    route: "/:id",
  });
});

// Update an existing note handler
router.patch("/:id", (req, res) => {
  res.json({
    msg: "You are updating an existing note!!",
    version: "V1",
    year: "2025",
    route: "/:id",
  });
});

// Delete an existing note handler
router.delete("/:id", (req, res) => {
  res.json({
    msg: "You are deleting an existing note!!",
    version: "V1",
    year: "2025",
    route: "/:id",
  });
});

// Export the router, so that it can be mounted on the main server that has the express() instance
// No need to desctructure because you are exporting only one Object
module.exports = router;
