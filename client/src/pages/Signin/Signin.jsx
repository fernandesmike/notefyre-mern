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
      />
      <div className={style["cta-container"]}>
        <FacebookAuth />
        <a href="">Nah, skip for now</a>
        <a className={style["cta-register"]} href="">
          Don&apos;t have an account? Register here
        </a>
      </div>
    </section>
  );
};

export default Signin;
