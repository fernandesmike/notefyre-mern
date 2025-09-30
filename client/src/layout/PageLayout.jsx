import { Outlet } from "react-router-dom";

// Components
import Header from "../components/Header/Header";
import Notification from "../components/Notification/Notification";

const PageLayout = () => {
  return (
    <main>
      {/* TODO: Only show this is the client is in guest mode */}
      <Notification />
      <div className="body-wrapper">
        <Header />
        <Outlet />
      </div>
    </main>
  );
};

export default PageLayout;
