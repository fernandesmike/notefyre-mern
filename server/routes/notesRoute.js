const express = require("express");
const router = express.Router();
const {
  getAllNotes,
  getNote,
  updateNote,
  postNote,
  deleteNote,
} = require("../controllers/noteController");

// GET all notes
router.get("/all", getAllNotes);

// GET single note
router.get("/:id", getNote);

// POST a new note
router.post("/new-note", postNote);

// UPDATE a note
router.patch("/:id", updateNote);

// DELETE a note
router.delete("/:id", deleteNote);

// Allows the router to be imported on the server
module.exports = router;
