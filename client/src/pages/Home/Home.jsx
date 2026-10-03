import { useEffect, useState } from "react";

// Components
import NoteCard from "../../components/NoteCard/NoteCard";

// Utilities & Services
import EmptyNotes from "../../components/EmptyState/EmptyNotes";

const Home = () => {
  const [notes, setNotes] = useState();

  useEffect(() => {
    try {
      const fetchAllNotes = async () => {
        const response = await fetchAllNotes();
        const allNotes = response.data;
        setNotes(allNotes.notes);
      };

      fetchAllNotes();
      console.log(notes);
    } catch (error) {
      console.log(error);
    }
  }, [notes]);

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
