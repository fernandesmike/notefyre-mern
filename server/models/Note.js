const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    from: { type: String, required: false },
    contents: { type: String, required: true },
  },
  { timestamps: true }
);

// Mongoose hooks that executes the function during document pre-save
// No to arrow functions, their lexical scope messes with the "this" keyword
// Triggered by an async handler, so make sure its async
noteSchema.pre("save", async function () {
  // Import and create from /utils folder if logic gets complex here
  console.log(`Saving: ${this.title}`);
  // No need to use next() since the function is async
});

module.exports = mongoose.model("Note", noteSchema);
