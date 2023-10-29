// Styling
import style from "./CreateNewNote.module.css";

// Assets
import Book from "../../assets/icons/book.svg";
import RightArrow from "../../assets/icons/arrow-right.svg";
import LeftDoodle from "../../assets/shapes/doodle-left.svg";
import RightDoodle from "../../assets/shapes/doodle-right.svg";
import ArrowHighlight from "../../assets/shapes/arrow.svg";
import HighlightText from "../../assets/shapes/arrow-text.svg";

const CreateNewNote = () => {
  return (
    <article className={style["main-wrapper"]}>
      <section className={style["text-wrapper"]}>
        <div>
          <img src={Book} />
        </div>
        <div className={style["text-content"]}>
          <h4>Create your first note</h4>
          <p className="paragraph">
            Access your notes anytime even when offline!
          </p>
        </div>
      </section>
      <div>
        <img src={RightArrow} />
      </div>
 
      {/* Highlights */}
      <div className={style["doodle-left"]}>
        <img src={LeftDoodle} />
      </div>
      <div className={style["doodle-right"]}>
        <img src={RightDoodle} />
      </div>
      <div className={style["arrow-highlight"]}>
        <img src={ArrowHighlight} />
        <div>
          <img src={HighlightText} />
        </div>
      </div>
    </article>
  );
};

export default CreateNewNote;
