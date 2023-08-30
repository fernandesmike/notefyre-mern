import { Outlet } from "react-router-dom";

// Components
import { Header } from "../components/Header/Header";

const HomeLayout = () => {
  return (
    <main>
      <Header />
      <Outlet />
      <h2>Footer here at the bottom</h2>
      
    </main>
  );
};

export default HomeLayout;
