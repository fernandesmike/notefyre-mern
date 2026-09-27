import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <main>
      <div className="body-wrapper">
        <Outlet />
      </div>
    </main>
  );
};

export default AuthLayout;
