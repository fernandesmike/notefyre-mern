import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const NoteDetails = () => {
  const { id } = useParams();
  const [note, setNote] = useState();

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
  }, []);

  return <div>{note ? <p>{note.title}</p> : <p>No Contents</p>}</div>;
};

export default NoteDetails;
