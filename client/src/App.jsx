import { Route, Routes } from "react-router-dom";

// Pages
import Home from "../pages/Home/Home";
import Profile from "../pages/Profile/Profile";
import Layout from "../layout/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/profile" element={<Profile />} />

        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
