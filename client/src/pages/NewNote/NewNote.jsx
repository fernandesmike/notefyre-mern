import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Error from "../../components/Error/Error";

// Styling
import style from "./NewNote.module.css";

// Utilities
import { validateNoteTitle } from "../../utils/fieldValidator";
import { addNote } from "../../services/noteApi";

const NewNote = ({ currentUser }) => {
  // For redirecting users
  const redirect = useNavigate();

  // TODO: Try creating an Note Object instead of allocating each contents
  const [title, setTitle] = useState("");
  const [from, setFrom] = useState(currentUser);
  const [contents, setContents] = useState("");
  const [error, setError] = useState();

  // onSubmit handler function
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the note Title prior POST request
    const validTitle = validateNoteTitle(title);

    try {
      const noteObj = { title: validTitle, from: from, contents: contents };

      const postedNote = await addNote(noteObj);

      setError(null);
      setTitle("");
      setFrom("");
      setContents("");

      console.log(postedNote.data);
      redirect("../notes");
    } catch (err) {
      setError(err);
    }
  };

  return (
    <form
      action="POST"
      onSubmit={handleSubmit}
      className={style["form-wrapper"]}
    >
      <h1 className={style["form-title"]}>CREATE NEW NOTE</h1>

      {/* Error handling */}
      {error && <Error errorMessage={error.message} />}

      <div className={style["title-area"]}>
        {/* Note title input area */}
        <input
          type="text"
          name="title"
          id="title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
          placeholder="Give your note a title"
        />
        <button>Submit note</button>
      </div>

      {/* Note from input area */}
      <input
        type="text"
        name="from"
        id="from"
        onChange={(e) => {
          setFrom(e.target.value);
        }}
        value={from}
        placeholder="Name of the owner"
      />

      {/* Note contents input area */}
      <textarea
        name="contents"
        id="contents"
        cols="30"
        rows="10"
        onChange={(e) => {
          setContents(e.target.value);
        }}
        value={contents}
        placeholder="Start typing..."
      ></textarea>
    </form>
  );
};

export default NewNote;
