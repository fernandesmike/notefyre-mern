import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Error from "../../components/Error/Error";

// Styling
import style from "./NewNote.module.css";

// Utilities
import { ValidateForm, ValidateNoteTitle } from "../../utils/fieldValidator";

const NewNote = () => {
  // For redirecting users
  const redirect = useNavigate();

  // TODO: Try creating an Note Object instead of allocating each contents
  const [title, setTitle] = useState("");
  const [from, setFrom] = useState("");
  const [contents, setContents] = useState("");
  const [error, setError] = useState();
  const [disable, setDisable] = useState(true);

  useEffect(() => {
    const validateTitle = ValidateNoteTitle(title);

    console.log(title);

    if (validateTitle.keys < 1) {
      console.log(title);
    } else {
      console.log(validateTitle.placeholder);
    }
  }, [title]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const noteObj = { title: title, from: from, contents: contents };

      const postedNote = await axios.post(
        "http://localhost:4000/api/v1/",
        noteObj,
      );

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
        <button disabled={disable}>Submit note</button>
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

      {error && <Error errorMessage={error.message} />}
    </form>
  );
};

export default NewNote;
