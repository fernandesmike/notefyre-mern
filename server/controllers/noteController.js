const Note = require("../models/Note");

const getAllNotes = async (req, res) => {
  try {
    //  Sorting, -1 for Descending and 1 for Ascending
    // Returns a Query Object (from mongoose)
    const allNotes = await Note.find().sort({ createdAt: -1 });
    res.status(200).json({ message: "All notes retrieved!", allNotes });
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log(error);
  }
};

const getSingleNote = (req, res) => {
  res.json({
    msg: "Retrieving a single note!",
    version: "V1",
    year: "2025",
    route: "/:id",
    handler: "getSingleNote",
  });
};

const addNote = async (req, res) => {
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

const replaceNote = (req, res) => {
  res.json({
    msg: "Replacing an entire note!",
    version: "V1",
    year: "2025",
    route: "/:id",
    handler: "replaceNote",
  });
};

const deleteSingleNote = (req, res) => {
  res.json({
    msg: "Deleting a single note!",
    version: "V1",
    year: "2025",
    route: "/:id",
    handler: "deleteSingleNote",
  });
};

module.exports = {
  getAllNotes,
  getSingleNote,
  addNote,
  updateNote,
  replaceNote,
  deleteSingleNote,
};
