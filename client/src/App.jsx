import { Route, Routes } from "react-router-dom";

// Pages
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import PageLayout from "./layout/PageLayout";
import NewNote from "./pages/NewNote/NewNote";
import NoteDetails from "./pages/NoteDetails/NoteDetails";
import Signin from "./pages/Signin/Signin";
import Register from "./pages/Register/Register";
import DefaultHome from "./pages/DefaultHome/DefaultHome";
import HomeWithNotes from "./pages/HomeWithNotes/HomeWithNotes";

// Main styling
import "../styles/main.css";
import "../styles/base-style-guide.css";
import "../styles/css-reset.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/register" element={<Register />} />
        <Route element={<PageLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/default" element={<DefaultHome />} />
          <Route path="/complete" element={<HomeWithNotes />} />
          <Route path="/new" element={<NewNote />} />
          <Route path="/:id" element={<NoteDetails />} />
          <Route path="/me" element={<Profile />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
