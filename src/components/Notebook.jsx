import React, { useState, useEffect } from "react";

import NoteList from "./NoteList";
import NotesDb from "./NotesDb";
import { nanoid } from "nanoid";
import "../index.scss";
import Search from "./Search";
import CreatedNote from "./CreatedNote";

const Notebook = () => {
  const [notes, setNotes] = useState(NotesDb);
  const [backupNotes, setBackupNotes] = useState([]);
  const [isFilterOn, setIsFilterOn] = useState(false);
  const [filter, setFilter] = useState("all");
  const [filteredNotes, setFilteredNotes] = useState(notes);
  useEffect(() => {
    notes.sort();
    setBackupNotes(NotesDb);
  }, []);

  const searchTitle = (e) => {
    if (e.trim().length > 0) {
      if (isFilterOn) {
        setFilteredNotes((prevState) =>
          prevState.filter((note) => note.content.toLowerCase().includes(e))
        );
      } else {
        setNotes((prevState) =>
          prevState.filter((note) => note.content.toLowerCase().includes(e))
        );
      }
    } else {
      setNotes(backupNotes);
      filterResult("all");
    }
  };

  const filterResult = (category) => {
    if (category === "all") {
      setFilteredNotes(notes);
      setIsFilterOn(false);
    } else {
      const result = notes.filter((data) => {
        return data.category === category;
      });
      setFilteredNotes(result);
      setIsFilterOn(true);
      setFilter(category);
    }
  };

  const addNote = (title, content) => {
    const date = new Date();
    const theNewNote = {
      title: title,
      content: content,
      id: nanoid(),
      date: date.toLocaleDateString(),
      category: filter,
    };
    if (isFilterOn) {
      setFilteredNotes((prevState) => [theNewNote, ...prevState]);
      setNotes((prevState) => [theNewNote, ...prevState]);
      setBackupNotes((prevState) => [theNewNote, ...prevState]);
    } else {
      setNotes((prevState) => [theNewNote, ...prevState]);
      setBackupNotes((prevState) => [theNewNote, ...prevState]);
    }
  };

  const deleteNote = (id) => {
    if (isFilterOn) {
      setFilteredNotes((prevState) =>
        prevState.filter((note) => note.id !== id)
      );
      setNotes((prevState) => prevState.filter((note) => note.id !== id));
      setBackupNotes((prevState) => prevState.filter((note) => note.id !== id));
    } else {
      setNotes((prevState) => prevState.filter((note) => note.id !== id));
      setBackupNotes((prevState) => prevState.filter((note) => note.id !== id));
    }
  };

  return (
    <div className="notelist max-w-[800px] w-[90%] flex-col md:flex-row flex items-center backdrop-blur-md justify-center bg-[#0000009a] text-white">
      <div className="md:w-1/2 w-full py-[3rem] ">
        <div className="w-full bg-[#0000009a] pl-4 flex items-center mb-[4rem] py-2">
          <Search makeSearch={searchTitle} />
        </div>

        <div className="flex flex-col ">
          <button
            onClick={() => filterResult("all")}
            className="w-full hover:bg-[#0000009a] transition-all 0.3s py-3 text-lg text-left pl-4 uppercase"
          >
            All notes
          </button>
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
        {!isFilterOn && <h1>All notes</h1>}
        {isFilterOn && <h1 className="capitalize">{filter}</h1>}
        {isFilterOn && <CreatedNote fliter={filter} addingNote={addNote} />}
        {!isFilterOn &&
          notes.map((note) => {
            return (
              <NoteList key={note.id} note={note} deletingNote={deleteNote} />
            );
          })}
        {isFilterOn &&
          filteredNotes.map((note) => {
            return (
              <NoteList key={note.id} note={note} deletingNote={deleteNote} />
            );
          })}
      </div>
    </div>
  );
};

export default Notebook;
