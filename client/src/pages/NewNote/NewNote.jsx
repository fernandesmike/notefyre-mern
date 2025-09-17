import axios from "axios";
import { useState } from "react";
import Error from "../../components/Error/Error";

const NewNote = () => {
  const [title, setTitle] = useState("");
  const [from, setFrom] = useState("");
  const [contents, setContents] = useState("");
  const [error, setError] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const noteObj = { title: title, from: from, contents: contents };

      const postedNote = await axios.post(
        "http://localhost:4000/new-note",
        noteObj
      );

      setError(null);
      setTitle("");
      setFrom("");
      setContents("");

      console.log(postedNote.data);
      window.location.href = "/";
    } catch (err) {
      setError(err);
    }
  };

  return (
    <form action="POST" onSubmit={handleSubmit}>
      <h1>New note</h1>

      <label htmlFor="title">Title</label>
      <br />
      <input
        type="text"
        name="title"
        id="title"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        value={title}
      />
      <br />

      <label htmlFor="from">From</label>
      <br />
      <input
        type="text"
        name="from"
        id="from"
        onChange={(e) => {
          setFrom(e.target.value);
        }}
        value={from}
      />
      <br />

      <label htmlFor="contents">Contents</label>
      <br />
      <textarea
        name="contents"
        id="contents"
        cols="30"
        rows="10"
        onChange={(e) => {
          setContents(e.target.value);
        }}
        value={contents}
      ></textarea>

      <button>Submit note</button>
      {error && <Error errorMessage={error.message} />}
    </form>
  );
};

export default NewNote;
