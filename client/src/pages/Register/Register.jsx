// Styling
import style from "./Register.module.css";

// Components
import Title from "../../components/Title/Title";

const Register = () => {
  return (
    <section>
      <Title
        title={"Be one of the glorious note-takers!"}
        subtitle={
          "Create your account for free and save your notes through infinity and beyond."
        }
      />
      <div className={style["cta-container"]}>
        <a className={style["fb-prompt"]} href="">
          Sign in using Facebook
        </a>
        <a href="">Nah, skip for now</a>
        <a className={style["cta-register"]} href="">
          Don&apos;t have an account? Register here
        </a>
      </div>
    </section>
  );
};

export default Register;
