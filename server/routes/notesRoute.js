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

// GET all notes
router.get(process.env.REACT_APP_API_NOTES_ENDPOINT, getAllNotes);

// GET single note
router.get(process.env.REACT_APP_API_SINGLE_NOTE_ENDPOINT, getNote);

// POST a new note
router.post(process.env.REACT_APP_API_CREATE_NOTE_ENDPOINT, postNote);

// UPDATE a note
router.patch(process.env.REACT_APP_API_SINGLE_NOTE_ENDPOINT, updateNote);

// DELETE a note
router.delete(process.env.REACT_APP_API_SINGLE_NOTE_ENDPOINT, deleteNote);

// Allows the router to be imported on the server
module.exports = router;
