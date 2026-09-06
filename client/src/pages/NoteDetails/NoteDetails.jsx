import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

// Styling
import style from "./NoteDetails.module.css";

const NoteDetails = () => {
  const { id } = useParams();
  const [note, setNote] = useState();
  const [loading, setLoading] = useState(true);

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

  return (
    <div className={style["parent-return-wrapper"]}>
      {note ? (
        <div className={style["main-wrapper"]}>
          <div className={style["upper-section"]}>
            <div className={style["title-area"]}>
              <h2 className="prm-text">{note.title}</h2>
              <p className="secondary-text">Note ID: {note._id}</p>
            </div>
            <div className="author-name">
              <p className="secondary-text">
                Created by <span>{note.from}</span>
              </p>
              <p className="secondary-text">Last saved: {note.updatedAt}</p>
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
