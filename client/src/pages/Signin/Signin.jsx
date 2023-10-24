// Styling
import "../../../styles/base-style-guide.css";
import style from "./Signin.module.css";

// Assets
import Brand from "../../assets/branding/brand-dark.svg";
import FbIcon from "../../assets/icons/fb-square.svg";

const Signin = () => {
  return (
    <section>
      <div className={style["brand-container"]}>
        <img
          className={style["notefyre-branding"]}
          src={Brand}
          alt="Notefyre branding"
        />
      </div>
      <div className={style["vp-content"]}>
        <h1 className="prm-text">All your notes in one virtual place</h1>
        <p className="paragraph">
          A simple and minimalistic note taking companion to help you keep and
          preserve your everyday learnings.
        </p>
      </div>
      <div className={style["cta-container"]}>
        <a className={style["fb-prompt"]} href="">
          <img src={FbIcon} alt="Facebook Icon" />
          Sign in using Facebook
        </a>
        <a href="">Nah, skip for now</a>
        <a className={style["cta-register"]} href="">
          Don't have an account? Register here
        </a>
      </div>
    </section>
  );
};

export default Signin;
