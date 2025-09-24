require("mongoose");
const { default: mongoose } = require("mongoose");
const Note = require("../models/Note");

const getNotes = async (req, res) => {
  try {
    //  Sorting, -1 for Descending and 1 for Ascending
    //  Using lean() will only return plain JS Object not a Mongoose Document
    const notes = await Note.find().sort({ createdAt: -1 }).lean();
    res.status(200).json({
      message: "All notes retrieved!",
      count: notes.length,
      notes,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log(error);
  }
};

const getNote = async (req, res) => {
  try {
    const { id } = req.params;

    //  Check first if the provided ID is a valid MongoDB ID
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res
        .status(404)
        .json({ message: "Invalid ID. Please check the provided ID" });
    }

    const note = await Note.findById(id).lean();

    // If there is no such note, then return 404
    if (!note) {
      return res
        .status(404)
        .json({ message: "Cannot find the note with the specified ID" });
    }

    res.status(200).json({
      message: `Note: ${note.title} retrieved.`,
      note,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log(error);
  }
};

const createNote = async (req, res) => {
  try {
    // Deconstruct contents from request body to avoid using "this" and unneeded variable declaration
    const { title, from, contents } = req.body;

    // Creating Note object allows more control, as we can insert hooks and manually call save()
    const newNote = new Note({ title, from, contents });

    // Returns a Promise and triggers the pre() hook on the Note schema
    const savedNote = await newNote.save();

    // Handle the Promise
    res.status(201).json({
      message: `Note: ${savedNote.title}, was created and saved succesfully!`,
      note: savedNote,
    });
  } catch (error) {
    // Error handlers maybe passed
    res.status(400).json({ error: error.message });
    console.log(error);
  }
};

const updateNote = (req, res) => {
  res.json({
    msg: "Updating a single note!",
    version: "V1",
    year: "2025",
    route: "/:id",
    handler: "updateNote",
  });
};

const putNote = (req, res) => {
  res.json({
    msg: "Replacing an entire note!",
    version: "V1",
    year: "2025",
    route: "/:id",
    handler: "replaceNote",
  });
};

const deleteNote = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({
        message: "Invalid ID or not found. Please check the provided ID",
      });
    }

    const deletedNote = await Note.findByIdAndDelete({ _id: id }).lean();

    if (!deletedNote) {
      return res.status(404).json({
        message: "Cannot find the specific note or was deleted succesfully",
      });
    }

    res.status(200).json({
      message: `Note: ${deletedNote.title} was deleted!`,
      deletedNote,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log(error);
  }
};

module.exports = {
  getNotes,
  getNote,
  createNote,
  updateNote,
  putNote,
  deleteNote,
};
