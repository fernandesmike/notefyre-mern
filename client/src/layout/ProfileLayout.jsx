import { Outlet } from "react-router-dom";

export const ProfileLayout = () => {
  return (
    <main>
      <h1>Navigation bar at the top</h1>
      <Outlet />
      <h2>Footer here at the bottom</h2>
    </main>
  );
};
