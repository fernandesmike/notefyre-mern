import { Route, Routes } from "react-router-dom";

// Pages
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import HomeLayout from "./layout/HomeLayout";
import NewNote from "./pages/NewNote/NewNote";
import NoteDetails from "./pages/NoteDetails/NoteDetails";
import Signin from "./pages/Signin/Signin";

// Main styling
import "../styles/main.css";
import "../styles/base-style-guide.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route element={<HomeLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<NewNote />} />
          <Route path="/:id" element={<NoteDetails />} />
          <Route path="/me" element={<Profile />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
