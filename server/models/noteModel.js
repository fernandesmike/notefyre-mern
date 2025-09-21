const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    from: { type: String, required: false },
    contents: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.Model("Note", NoteSchema);
