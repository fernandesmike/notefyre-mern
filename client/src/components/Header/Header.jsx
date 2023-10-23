// Styling
import style from "./Header.module.css";

// Assets
import AppIcon from "../../assets/branding/brand-dark.svg";

export const Header = ({ userName, userPhoto }) => {
  return (
    <header>
      <div className={style["app-icon"]}>
        <img src={AppIcon} alt="Notefyre app icon" />
      </div>
      <div className={style["avatar-container"]}>
        <div>O</div>
        {userName ? (
          <div className="profile">
            <p>{userName}</p>
            <p>{userPhoto}</p>
          </div>
        ) : (
          <p>You&apos;re not logged in</p>
        )}
      </div>
    </header>
  );
};
