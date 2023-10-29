// Styling
import style from "./HomeTitle.module.css";

// Assets
import BrandIcon from "../../assets/branding/icon-dark.svg";

const HomeTitle = () => {
  return (
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
  );
};

export default HomeTitle;
