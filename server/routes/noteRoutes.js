const {
  getNote,
  getNotes,
  createNote,
  updateNote,
  deleteNote,
} = require("../controllers/noteController");
const express = require("express");
const router = express.Router();

// Get all notes handler
router.get("/", getNotes);

// Get a single note handler
router.get("/:id", getNote);

// Add a new note handler
router.post("/", createNote);

// Update an existing note handler
router.patch("/:id", updateNote);

// Delete an existing note handler
router.delete("/:id", deleteNote);

// Export the router, so that it can be mounted on the main server that has the express() instance
// No need to desctructure because you are exporting only one Object
module.exports = router;
