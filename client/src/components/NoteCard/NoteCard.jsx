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
      </div>

      <h4>test</h4>
    </article>
  );
};

export default NoteCard;
