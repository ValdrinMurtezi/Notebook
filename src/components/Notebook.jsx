import React, { useState } from "react";
import NoteList from "./NoteList";
import NotesDb from "./NotesDb";
import { nanoid } from "nanoid";
import "../index.scss";
import Search from "./Search";

const Notebook = () => {
  const [notes, setNotes] = useState(NotesDb);
  const [search, setSearch] = useState("");

  const filterResult = (category) => {
    const result = NotesDb.filter((data) => {
      return data.category === category;
    });
    setNotes(result);
  };

  const addNote = (content, title) => {
    const date = new Date();
    const theNewNote = {
      title: title,
      content: content,
      id: nanoid(),
      date: date.toLocaleDateString(),
    };
    const completedNote = [...notes, theNewNote];
    setNotes(completedNote);
  };

  const deleteNote = (id) => {
    const completedNote = notes.filter((note) => note.id !== id);
    setNotes(completedNote);
  };

  return (
    <div className="notelist max-w-[800px] w-[90%] flex-col md:flex-row flex items-center backdrop-blur-md justify-center bg-[#0000009a] text-white">
      <div className="md:w-1/2 w-full py-[3rem] ">
        <div className="w-full bg-[#0000009a] pl-4 flex items-center mb-[4rem] py-2">
          <Search makeSearch={setSearch} />
        </div>

        <div className="flex flex-col ">
          <button
            onClick={() => filterResult("todo")}
            className="w-full hover:bg-[#0000009a] border-2 border-transparent hover:border-2 hover:border-[goldenrod] rounded-md transition-all 0.3s py-3 text-lg text-left pl-4 uppercase"
          >
            To Do
          </button>
          <button
            onClick={() => filterResult("meetings")}
            className="w-full hover:bg-[#0000009a] border-2 border-transparent hover:border-2 hover:border-[goldenrod] rounded-md transition-all 0.3s py-3 text-lg text-left pl-4 uppercase"
          >
            Meetings
          </button>
          <button
            onClick={() => filterResult("shopping")}
            className="w-full hover:bg-[#0000009a] border-2 border-transparent hover:border-2 hover:border-[goldenrod] rounded-md transition-all 0.3s py-3 text-lg text-left pl-4 uppercase"
          >
            Shopping
          </button>
          <button
            onClick={() => filterResult("important")}
            className="w-full hover:bg-[#0000009a] border-2 border-transparent hover:border-2 hover:border-[goldenrod] rounded-md transition-all 0.3s py-3 text-lg text-left pl-4 uppercase"
          >
            Important
          </button>
        </div>
      </div>

      <div className="w-full md:w-1/2 bg-[#4b4a4a11] py-4 backdrop-blur-md max-h-[35rem] h-[35rem] overflow-y-scroll">
        <h1>{notes.title}</h1>
        <NoteList
          title={notes.title}
          notes={notes.filter((note) =>
            note.content.toLowerCase().includes(search)
          )}
          addingNote={addNote}
          deletingNote={deleteNote}
          id={notes.id}
        />
      </div>
    </div>
  );
};

export default Notebook;
