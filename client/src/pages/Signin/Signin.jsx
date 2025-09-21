import { Link } from "react-router-dom";

// Styling
import style from "./Signin.module.css";

// Components
import Title from "../../components/Title/Title";
import FacebookAuth from "../../components/Buttons/FacebookAuth";

const Signin = () => {
  return (
    <section>
      <Title
        title={"All your notes in one virtual place"}
        subtitle={
          "A simple and minimalistic note taking companion to help you keep andpreserve your everyday learnings."
        }
        showHighlight={true}
      />
      <div className={style["cta-container"]}>
        <FacebookAuth procedure={"Continue"} />
        <Link className={style["link"]} to="/default">
          Nah, skip for now
        </Link>
        <Link className={style["cta-register"]} to="/register">
          Don&apos;t have an account? Register here{" "}
        </Link>
      </div>
    </section>
  );
};

export default Signin;
