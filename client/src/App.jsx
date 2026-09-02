import { Route, Routes } from "react-router-dom";

// Pages
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import NewNote from "./pages/NewNote/NewNote";
import NoteDetails from "./pages/NoteDetails/NoteDetails";
import Signin from "./pages/Signin/Signin";
import Register from "./pages/Register/Register";
import DefaultHome from "./pages/DefaultHome/DefaultHome";
import HomeWithNotes from "./pages/HomeWithNotes/HomeWithNotes";

// Layouts
import PageLayout from "./layout/PageLayout";
import AuthLayout from "./layout/AuthLayout";

// Main styling
import "../styles/main.css";
import "../styles/base-style-guide.css";
import "../styles/css-reset.css";

function App() {
  return (
    <>
      <Routes>
        {/* AuthLayout route wraps all authentication related paths */}
        <Route element={<AuthLayout />}>
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Register />} />
        </Route>

        {/* Pagelayout route wraps all authenticated (logged in users) & protected paths */}
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
