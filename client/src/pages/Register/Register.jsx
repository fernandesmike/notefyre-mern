import { Link } from "react-router-dom";

// Styling
import style from "./Register.module.css";

// Components
import Title from "../../components/Title/Title";
import FacebookAuth from "../../components/Buttons/FacebookAuth";

const Register = () => {
  return (
    <section>
      <Title
        title={"Be one of the glorious note-takers!"}
        subtitle={
          "Create your account for free and save your notes through infinity and beyond."
        }
        showHighlight={false}
      />
      <div className={style["cta-container"]}>
        <p>Alright, let&apos;s create my account</p>
        <FacebookAuth procedure={"Register"} />
        <Link className={style["cta-signin"]} to="/">
          Sign-in instead
        </Link>
      </div>
    </section>
  );
};

export default Register;
