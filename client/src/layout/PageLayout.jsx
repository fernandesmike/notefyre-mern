import { Outlet } from "react-router-dom";

// Components
import { Header } from "../components/Header/Header";

const PageLayout = () => {
  return (
    <main>
      <Header />
      <h1>Test content!!</h1>
      <Outlet />
    </main>
  );
};

export default PageLayout;
