// Styling
import "./header.css";

export const Header = ({ userName, userPhoto }) => {
  return (
    <header>
      <div className="logo">LOGO</div>
      {userName ? (
        <div className="profile">
          <p>{userName}</p>
          <p>{userPhoto}</p>
        </div>
      ) : (
        <p>Login</p>
      )}
    </header>
  );
};
