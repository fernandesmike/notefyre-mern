import style from "./HomeWithNotes.module.css";

// Assets
import Highlight from "../../assets/icons/highlight.svg";
import NoteCard from "../../components/NoteCard/NoteCard";

const HomeWithNotes = () => {
  return (
    <article className={style["main-wrapper"]}>
      <section className={style["header-container"]}>
        <h4 className="heading-small">
          Focus on the things you&apos;ve learned!
        </h4>
        <p className="paragraph">
          Jot down your most important insights, learnings, or <br /> even
          ideas.
        </p>
        <div className={style["highlight"]}>
          <p className={style["add-btn"]}>Add new note</p>
          <img src={Highlight} />
        </div>
      </section>

      <section className={style["notes-container"]}>
        <p className="body-text">Your notes</p>
        <div className={style["notecards-container"]}>
          <NoteCard title="This goes hard" />
          <NoteCard title="Etits na gawa sa siopao" />
          <NoteCard title="Dagang naka jacket" />
        </div>
      </section>
    </article>
  );
};

export default HomeWithNotes;
