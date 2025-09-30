import { Outlet } from "react-router-dom";
import { Notification } from "../components/Notification/Notification";

// Components
import { Header } from "../components/Header/Header";

const PageLayout = () => {
  return (
    <main>
      <Notification />
      <Header />
      <Outlet />
    </main>
  );
};

export default PageLayout;
