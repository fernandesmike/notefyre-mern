const {
  getAllNotes,
  getSingleNote,
  addNote,
  updateNote,
  replaceNote,
  deleteSingleNote,
} = require("../controllers/noteController");
const express = require("express");
const router = express.Router();

// Get all notes handler
router.get("/", getAllNotes);

// Get a single note handler
router.get("/:id", getSingleNote);

// Add a new note handler
router.post("/", addNote);

// Replace an existing note handler
router.put("/:id", replaceNote);

// Update an existing note handler
router.patch("/:id", updateNote);

// Delete an existing note handler
router.delete("/:id", deleteSingleNote);

// Export the router, so that it can be mounted on the main server that has the express() instance
// No need to desctructure because you are exporting only one Object
module.exports = router;
