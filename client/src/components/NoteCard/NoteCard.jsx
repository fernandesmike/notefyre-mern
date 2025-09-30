import style from "./NoteCard.module.css";

// Assets
import DragIcon from "../../assets/icons/drag.svg";

const NoteCard = () => {
  return (
    <article className={style["note-wrapper"]}>
      <div className={style["note-card"]}>
        <img src={DragIcon} />
        <p className={style["note-tag"]}>Tag</p>
        <h4 className={style["note-title"]}>Title goes here</h4>
      </div>
    </article>
  );
};

export default NoteCard;
