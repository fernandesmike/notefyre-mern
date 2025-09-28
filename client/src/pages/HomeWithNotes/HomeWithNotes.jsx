import style from "./HomeWithNotes.module.css";

const HomeWithNotes = () => {
  return (
    <article className={style["main-wrapper"]}>
      <section>
        <h4>Focus on the things you&apos;ve learned!</h4>
        <p>
          Jot down your most important insights, learnings, or <br /> even
          ideas.
        </p>
        <p>Add new note</p>
      </section>

      <section>
        <p>Your notes</p>
        <p>List of notes goes here...</p>
      </section>
    </article>
  );
};

export default HomeWithNotes;
