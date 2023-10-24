// Styling
import "../../../styles/base-style-guide.css";
import style from "./Signin.module.css";

// Assets
import Brand from "../../assets/branding/brand-dark.svg";

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
        <h1 className="prm-text">Welcome to Notefyre</h1>
        <p className="paragraph">
          Jot down your notes anytime and anywhere. Just a single click!
        </p>
      </div>
      <div className={style["cta-container"]}>
        <a className={style["fb-prompt"]} href="">
          Sign in using Facebook
        </a>
        <a href="">Nah, skip for now</a>
      </div>
    </section>
  );
};

export default Signin;
