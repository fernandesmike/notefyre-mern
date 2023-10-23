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
      {/* Greetings */}
      <section>
        <div>
          <h1>Good day, Mike!</h1>
          <p>Learn something new everyday and take careful notes</p>
        </div>
      </section>

      <section>
        <div>
          {/* LEARNING:
          
              When async operationsa involved, always check for the state contents first
              before accessing it. As JSX code are executed immediately while you
              are still trying to display the async data!
          */}

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
