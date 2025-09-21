import { useEffect, useState } from "react";
import axios from "axios";

import NoteCard from "../../components/NoteCard/NoteCard";
import NoNotes from "../../components/EmptyState/NoNotes";

const Home = () => {
  const [notes, setNotes] = useState();

  useEffect(() => {
    try {
      const fetchAllNotes = async () => {
        const response = await axios.get("http://localhost:4000/api/v1/notes");
        const allNotes = response.data;
        setNotes(allNotes);
        console.log(allNotes);
      };

      fetchAllNotes();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      <section>
        <div>
          {/* Check for the contents first */}
          {notes ? (
            notes.map((note) => <NoteCard key={note._id} note={note} />)
          ) : (
            <NoNotes />
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
