import React from "react";
import Note from "./Note";
import CreatedNote from "./CreatedNote";

function NoteList({ notes, addingNote, deletingNote, title }) {
  return (
    <div className="w-full flex flex-col items-center  py-5 space-y-5">
      {notes.map((note, id) => {
        return (
          <>
            <h1>{title}</h1>
            <Note
              key={note.id}
              id={note.id}
              title={note.title}
              content={note.content}
              date={note.date}
              deletingNote={deletingNote}
              addingNote={addingNote}
            />
          </>
        );
      })}
      <CreatedNote addingNote={addingNote} title={title} />
    </div>
  );
}

export default NoteList;
