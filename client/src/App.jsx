import { Route, Routes } from "react-router-dom";

// Pages
import Home from "../pages/Home/Home";
import Profile from "../pages/Profile/Profile";
import Layout from "../layout/Layout";
import NewNote from "../pages/NewNote/NewNote";
import NoteDetails from "../pages/NoteDetails/NoteDetails";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<NewNote />} />
          <Route path="/:id" element={<NoteDetails />} />
        </Route>

        <Route element={<Profile />}></Route>
      </Routes>
    </>
  );
}

export default App;
