require("dotenv").config();
const express = require("express");
const router = express.Router();
const {
  getAllNotes,
  getNote,
  updateNote,
  postNote,
  deleteNote,
} = require("../controllers/noteController");

const baseApi = process.env.REACT_APP_API_BASE_URL;
const notesEndpoint = process.env.REACT_APP_API_NOTES_ENDPOINT;

// GET all notes
router.get(`${baseApi}${notesEndpoint}`, getAllNotes);

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
