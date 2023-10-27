// Styling
import style from "./FacebookAuth.module.css";

// Assets
import FbIcon from "../../assets/icons/fb-square.svg";

const FacebookAuth = () => {
  return (
    <div className={style["fb-prompt"]}>
      <img src={FbIcon} alt="Facebook Icon" />
      <a href="">Sign in using Facebook</a>
    </div>
  );
};

export default FacebookAuth;
