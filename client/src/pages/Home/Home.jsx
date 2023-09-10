import { useEffect, useState } from "react";
import axios from "axios";

import NoteCard from "../../components/NoteCard/NoteCard";
import NoNotes from "../../components/EmptyState/NoNotes";

// Styling
import "../../../styles/Home.css";

const Home = () => {
  const [notes, setNotes] = useState();

  useEffect(() => {
    try {
      const fetchAllNotes = async () => {
        const response = await axios.get("http://localhost:4000/all");
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
      {/* Greetings */}
      <section>
        <div>
          <h1>Good day, Mike!</h1>
          <p>Learn something new everyday and take careful notes</p>
        </div>
      </section>

      <section>
        <div>
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
