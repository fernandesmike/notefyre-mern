import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

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
    }
  }, [id]);

  {
    //   note ? <p>{note.title}</p> : <p>No Contents</p>;
    // }

    return (
      <div>
        {note ? (
          <>
            <div className="upper-section">
              <div className="title-area">
                <h2>{note.title}</h2>
                <p>{note._id}</p>
              </div>
              <div className="author-name">
                <p>
                  Create by <span>{note.from}</span>
                </p>
                <p className="update-timedate">Last saved: {note.updatedAt}</p>
              </div>
            </div>
            <div className="lower-section">
              <textarea
                name=""
                id=""
                className="note-contents"
                value={note.contents}
              ></textarea>
            </div>
          </>
        ) : (
          <p>No contents</p>
        )}
      </div>
    );
  }
};

export default NoteDetails;
