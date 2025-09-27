const {
  getNote,
  getNotes,
  createNote,
  updateNote,
  deleteNote,
} = require("../controllers/noteController");
const express = require("express");
const router = express.Router();
require("dotenv").config();

// Get all notes handler
router.get(process.env.API_NO_ID_ENDPOINT, getNotes);

// Get a single note handler
router.get(process.env.API_ID_ENDPOINT, getNote);

// Add a new note handler
router.post(process.env.API_NO_ID_ENDPOINT, createNote);

// Update an existing note handler
router.patch(process.env.API_ID_ENDPOINT, updateNote);

// Delete an existing note handler
router.delete(process.env.API_ID_ENDPOINT, deleteNote);

// Export the router, so that it can be mounted on the main server that has the express() instance
// No need to desctructure because you are exporting only one Object
module.exports = router;
