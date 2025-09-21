import { Outlet } from "react-router-dom";

// Components
import { Header } from "../components/Header/Header";

const PageLayout = () => {
  return (
    <main>
      <Header />
      <Outlet />
    </main>
  );
};

export default PageLayout;
