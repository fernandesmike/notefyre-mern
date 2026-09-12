import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

// Styling
import style from "./NoteDetails.module.css";

const NoteDetails = () => {
  const { id } = useParams();
  const [note, setNote] = useState();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const fetchSingleNote = async () => {
        const response = await axios.get(`http://localhost:4000/api/v1/${id}`);
        const noteObj = response.data;
        console.log(noteObj.note);
        setNote(noteObj.note);
      };

      fetchSingleNote();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [id]);

  const handleDelete = async () => {
    try {
      const delResponse = await axios.delete(
        `http://localhost:4000/api/v1/${id}`,
      );
      const delConfirmation = delResponse.data;
      console.log(delConfirmation);
      //  Send the user back one level after deleting a note
      navigate("..");
    } catch (error) {
      console.log(error);
      window.alert(`There was an error deleting note ${note._id}`);
    }
  };

  const handleUpdate = async () => {
    try {
      const updateResponse = await axios.patch(
        `http://localhost:4000/api/v1/${id}`,
        note,
      );
      const updConfirmation = updateResponse.data;
      console.log(updConfirmation);
      //  Send the user back one level after deleting a note
      navigate("..");
    } catch (error) {
      console.log(error);
      window.alert(`There was an error deleting note ${note._id}`);
    }
  };

  return (
    <div className={style["parent-return-wrapper"]}>
      {note ? (
        <div className={style["main-wrapper"]}>
          <div className={style["upper-section-wrapper"]}>
            <div className={style["upper-section"]}>
              <div className={style["title-area"]}>
                <input
                  type="text"
                  value={note.title}
                  onChange={(e) => {
                    setNote({ ...note, title: e.target.value });
                  }}
                />
                <button onClick={handleUpdate}>Save changes</button>
                <p className="secondary-text">Note ID: {note._id}</p>
              </div>
              <div className={style["author-name"]}>
                <p className="secondary-text">
                  Created by <span>{note.from}</span>
                </p>
                <p className="secondary-text">Last saved: {note.updatedAt}</p>
              </div>
            </div>
            <div className={style["control-area"]}>
              <button onClick={handleDelete}>Delete</button>
            </div>
          </div>
          <div className={style["lower-section"]}>
            <textarea
              name=""
              id=""
              className={style["note-contents"]}
              value={note.contents}
              onChange={(e) => {
                // Spread operator, copy the existing note, copy everything and change only the "contents" property
                setNote({ ...note, contents: e.target.value });
              }}
            ></textarea>
          </div>
        </div>
      ) : (
        <p>No contents</p>
      )}
    </div>
  );
};

export default NoteDetails;
