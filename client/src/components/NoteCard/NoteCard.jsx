import style from "./NoteCard.module.css";
import { Link } from "react-router-dom";

// Assets
import DragIcon from "../../assets/icons/drag.svg";

const NoteCard = ({ note }) => {
  return (
    <Link to={`${note._id}`} className={style["link-wrapper"]}>
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

          <h4 className="heading-small">{note.title}</h4>
          <p className="secondary-text">{note.createdAt}</p>
          <p className="paragraph">{note.contents}</p>
          <p className="secondary-text">Created by: {note.from}</p>
        </div>
      </article>
    </Link>
  );
};

export default NoteCard;
