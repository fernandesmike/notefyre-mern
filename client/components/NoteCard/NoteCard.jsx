const NoteCard = ({ note }) => {
  return (
    <article>
      <div>
        {/* Date */}
        <div>
          <p>{note.createdAt}</p>
        </div>

        {/* Title */}
        <div>
          <a href="">
            <h2>{note.title}</h2>
          </a>
        </div>

        {/* From */}
        <div>
          <p>{note.from}</p>
        </div>
      </div>

      <h4>test</h4>
    </article>
  );
};

export default NoteCard;
