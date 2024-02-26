import { Link } from "react-router-dom";

// Styling
import style from "./Header.module.css";

// Assets
import Brand from "../../assets/branding/brand-dark.svg";
import ProfileIcon from "../../assets/shapes/profile.svg";

export const Header = () => {
  return (
    <header>
      <Link className={style["link"]} to="/default">
        <div className={style["brand-section"]}>
          <img src={Brand} alt="Notefyre brand icon" />
        </div>
      </Link>

      <div className={style["account-section"]}>
        <div>
          <img src={ProfileIcon} />
        </div>
        <div className={style["credentials"]}>
          <p className="body-text">Mike Andrew</p>
          <p className="secondary-text">@fernandesmikee</p>
        </div>
      </div>
    </header>
  );
};
