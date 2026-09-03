import { useEffect, useState } from "react";
import axios from "axios";

// Components
import NoteCard from "../../components/NoteCard/NoteCard";
import EmptyNotes from "../../components/EmptyState/EmptyNotes";

const Home = () => {
  const [notes, setNotes] = useState();

  useEffect(() => {
    try {
      const fetchAllNotes = async () => {
        const response = await axios.get("http://localhost:4000/api/v1/");
        const allNotes = response.data;
        setNotes(allNotes.notes);
      };

      fetchAllNotes();
      console.log(notes);
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
            <EmptyNotes />
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
