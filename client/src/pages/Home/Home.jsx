import { useEffect, useState } from "react";

// Components
import NoteCard from "../../components/NoteCard/NoteCard";

// Utilities & Services
import EmptyNotes from "../../components/EmptyState/EmptyNotes";
import { fetchAllNotes } from "../../services/noteService";

const Home = () => {
  const [notes, setNotes] = useState();

  useEffect(() => {
    try {
      const fetchAll = async () => {
        const response = await fetchAllNotes();
        const allNotes = response.data;
        setNotes(allNotes.notes);
      };

      fetchAll();
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
