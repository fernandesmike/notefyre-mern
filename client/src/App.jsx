import { Navigate, Route, Routes } from "react-router-dom";

// Pages
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import NewNote from "./pages/NewNote/NewNote";
import NoteDetails from "./pages/NoteDetails/NoteDetails";
import Signin from "./pages/Signin/Signin";
import Register from "./pages/Register/Register";
import HomeWithNotes from "./pages/HomeWithNotes/HomeWithNotes";
import PageNotFound from "./pages/Error/PageNotFound";

// Layouts
import GuestLayout from "./layout/GuestLayout";
// import UserLayout from "./layout/UserLayout";
import AuthLayout from "./layout/AuthLayout";

// Main styling
import "../styles/main.css";
import "../styles/base-style-guide.css";
import "../styles/css-reset.css";

function App() {
  return (
    <>
      <Routes>
        {/* Skip the empty endpoint and bounce the user directly to login screen : For semantic purposes */}
        <Route path="/" element={<Navigate to={"/signin"} />} />

        {/* AuthLayout route wraps all authentication related paths */}
        <Route element={<AuthLayout />}>
          <Route path="/signin" element={<Signin />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* This layout wraps all unauthenticated routes */}
        <Route path="/guest" element={<GuestLayout />}>
          <Route index element={<Navigate to="notes" />} />
          <Route path="notes" element={<Home />} />
          <Route path="notes/new" element={<NewNote />} />
          <Route path="notes/:id" element={<NoteDetails />} />
          <Route path="complete" element={<HomeWithNotes />} />
          <Route path="profile" element={<Profile />} />
        </Route>

        {/* This layout wraps all protected (logged in users) routes */}

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
