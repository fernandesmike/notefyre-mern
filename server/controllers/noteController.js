const Note = require("../models/Note");

const getAllNotes = (req, res) => {
  res.json({
    msg: "Retrieving all notes!",
    version: "V1",
    year: "2025",
    route: "/",
    handler: "getAllNotes",
  });
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

const addNote = (req, res) => {
  res.json({
    msg: "Adding a single note!",
    version: "V1",
    year: "2025",
    route: "/",
    handler: "addNote",
  });
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
