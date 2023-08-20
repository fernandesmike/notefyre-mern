const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Create a schema
const noteSchema = new Schema(
  {
    title: { type: String, required: true },
    from: { type: String, required: false },
    contents: { type: String, required: true },
  },
  { timestamps: true }
);

// Convert that schema into model
const Note = mongoose.model("notes", noteSchema);

module.exports = Note;
