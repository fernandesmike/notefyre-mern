const NoteCard = ({ note }) => {
  return (
    <article>
      <div>
        {/* Date */}
        <div>
          <p>{note.createdAt}</p>
        </div>

        {/* Title */}
        <div>{note.title}</div>

        {/* From */}
        <div>
          <p>{note.from}</p>
        </div>

        <div>
          <p>{note.contents}</p>
        </div>
      </div>
    </article>
  );
};

export default NoteCard;
