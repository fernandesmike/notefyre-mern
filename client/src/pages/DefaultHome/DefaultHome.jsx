import { Link } from "react-router-dom";

// Assets & Styling
import BrandIcon from "../../assets/branding/icon-dark.svg";
import style from "./DefaultHome.module.css";

// Components
import CreateNewNote from "../../components/CallToActions/CreateNewNote";

const DefaultHome = () => {
  return (
    <section className={style["main-wrapper"]}>
      <article className={style["wrapper"]}>
        <img src={BrandIcon} />
        <section className={style["text-wrapper"]}>
          <h1 className="heading-small">Welcome to Notefyre, Mike!</h1>
          <p className="paragraph">
            All your notes will be displayed here. It&apos;s empty though, so
            let&apos;s <br /> create a fresh one.
          </p>
        </section>
      </article>
      <Link to="/">
        <CreateNewNote showArrow={true} />
      </Link>
    </section>
  );
};

export default DefaultHome;
