import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <main>
      <h1>Navigation bar at the top</h1>
      <Outlet />
      <h2>Footer here at the bottom</h2>
    </main>
  );
};

export default Layout;
