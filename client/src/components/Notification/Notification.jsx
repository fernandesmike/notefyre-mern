import style from "./Notification.module.css";

const Notification = () => {
  return (
    <div className={style["notif-container"]}>
      <p className="paragraph">
        You&apos;re currently in guest mode. Notes won&apos;t be saved.{" "}
        <span>Create account now!</span>
      </p>
    </div>
  );
};

export default Notification;
