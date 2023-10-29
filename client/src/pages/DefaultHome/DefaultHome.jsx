import { Link } from "react-router-dom";

// Styling
import style from "./DefaultHome.module.css";

// Components
import HomeTitle from "../../components/HomeTitle/HomeTitle";
import CreateNewNote from "../../components/CallToActions/CreateNewNote";

const DefaultHome = () => {
  return (
    <section className={style["main-wrapper"]}>
      <HomeTitle />
      <Link to="/">
        <CreateNewNote showArrow={true} />
      </Link>
    </section>
  );
};

export default DefaultHome;
