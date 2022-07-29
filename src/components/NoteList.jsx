import React from "react";
import Note from "./Note";

function NoteList({ note, addingNote, deletingNote }) {
  return (
    <div className="w-full flex flex-col items-center  py-5 space-y-5">
      <Note
        key={note.id}
        id={note.id}
        title={note.title}
        content={note.content}
        date={note.date}
        deletingNote={deletingNote}
        addingNote={addingNote}
      />
    </div>
  );
}

export default NoteList;
