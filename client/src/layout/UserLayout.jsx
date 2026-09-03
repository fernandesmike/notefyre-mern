import { Outlet } from "react-router-dom";

// Components
import Header from "../components/Header/Header";

const UserLayout = () => {
  return (
    <div className="body-wrapper">
      <Header />
      <Outlet />
    </div>
  );
};

export default UserLayout;
