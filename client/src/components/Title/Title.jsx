// Styling
import style from "./Title.module.css";

// Assets
import Brand from "../../assets/branding/brand-dark.svg";
import Highlight from "../../assets/icons/highlight.svg";

const Title = ({ title, subtitle }) => {
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
        <div className={style["highlight"]}>
          <h1 className="prm-text">{title}</h1>
          <img src={Highlight} />
        </div>
        <p className="paragraph">{subtitle}</p>
      </div>
    </section>
  );
};

export default Title;
