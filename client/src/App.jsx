import { Route, Routes } from "react-router-dom";

// Pages
import Home from "../pages/Home/Home";
import Profile from "../pages/Profile/Profile";
import Layout from "../layout/Layout";
import NewNote from "../pages/NewNote/NewNote";

function App() {
  return (
    <>
      <Routes>
        <Route path="/profile" element={<Profile />} />

        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<NewNote />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
