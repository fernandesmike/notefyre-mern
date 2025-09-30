import style from "./NoteCard.module.css";

// Assets
import DragIcon from "../../assets/icons/drag.svg";

const NoteCard = ({ title }) => {
  return (
    <article className={style["note-wrapper"]}>
      <div className={style["note-card"]}>
        <div className={style["icon-container"]}>
          <img src={DragIcon} />
        </div>
        <div className={style["tags-container"]}>
          <p className="secondary-text">EDUCATION</p>
          <p className="secondary-text">OFFLINE</p>
          <p className="secondary-text">+3</p>
        </div>
        <h4 className="heading-small">{title}</h4>
      </div>
    </article>
  );
};

export default NoteCard;
