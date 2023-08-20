const Note = require("../models/noteModel");
const { Types } = require("mongoose");

// GET all notes
const getAllNotes = async (req, res) => {
  try {
    const allNotes = await Note.find().sort({ createdAt: -1 });
    res.status(200).json(allNotes);
  } catch (err) {
    res
      .status(400)
      .json({ message: "Cannot fetch all notes", error: err.message });
  }
};

// GET single note
const getNote = async (req, res) => {
  const { id } = req.params;

  // Check if the entered ID is valid
  if (!Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid ID" });
  }

  try {
    const note = await Note.findById(id);

    if (!note) {
      return res.status(400).json({ message: "No such note exists!" });
    }

    res.status(200).json(note);
  } catch (err) {
    res
      .status(400)
      .json({ message: `Cannot fetch note ${id}`, error: err.message });
  }
};

// POST a new note
const postNote = async (req, res) => {
  // Extract the data from the request object's body
  const { title, from, contents } = req.body;

  try {
    // Pass it on the create() method of the Note model
    const posted_note = await Note.create({ title, from, contents });
    res.status(200).json(posted_note);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// UPDATE a note
const updateNote = async (req, res) => {
  const { id } = req.params;

  // Check if the entered ID is valid
  if (!Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid ID" });
  }

  try {
    const updatedNote = await Note.findByIdAndUpdate(id, {
      ...req.body,
    });

    if (!updatedNote) {
      return res
        .status(400)
        .json({ message: "Cannot update a non - existing note!" });
    }

    res.status(200).json(updatedNote);
  } catch (err) {
    res.status(400).json({ message: err.message });
    console.log(err);
  }
};

// DELETE a note
const deleteNote = async (req, res) => {
  const { id } = req.params;

  // Check if the entered ID is valid
  if (!Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid ID" });
  }

  try {
    const removedNote = await Note.findByIdAndDelete(id);

    if (!removedNote) {
      return res
        .status(400)
        .json({ message: "Cannot delete a non - existing note!" });
    }

    res.status(200).json(removedNote);
  } catch (err) {
    res.status(400).json({ message: err.message });
    console.log(err);
  }
};

module.exports = { getAllNotes, getNote, postNote, updateNote, deleteNote };
