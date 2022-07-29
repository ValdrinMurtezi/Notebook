import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

function CreatedNote({ addingNote, title }) {
  const [noteText, setNoteText] = useState("");
  const [noteTitle, setNoteTitle] = useState("");
  const changeText = (e) => {
    setNoteText(e.target.value);
  };
  const changeTitle = (e) => {
    setNoteTitle(e.target.value);
  };
  const savingNote = () => {
    if (noteText.trim().length > 0) {
      addingNote(noteTitle, noteText);
      setNoteText("");
      setNoteTitle("");
    }
  };
  return (
    <div className="flex flex-col justify-between px-3 w-[90%] h-[30%]  backdrop-blur-lg bg-[#fbfcfd27] rounded-lg">
      <div>
        <div className="border-b-[1px] border-[#0000009a] py-1">
          <input
            placeholder="Title"
            onChange={changeTitle}
            value={noteTitle}
            className="py-1 text-lg w-full bg-transparent border-none focus:outline-none rounded-md"
            type="text"
          />
        </div>
        <textarea
          onChange={changeText}
          value={noteText}
          cols="8"
          rows="5"
          placeholder="Write your note here... "
          className="w-full border-none bg-transparent resize-none focus:outline-none"
        ></textarea>
      </div>

      <div className="flex justify-between pb-2">
        <p className="text-[13px] text-[#999999]">Created on: </p>
        <button
          onClick={savingNote}
          className="border-2 border-[#7beb20] rounded-full"
        >
          <AiOutlinePlus size="20px" className="text-[#7beb20]" />
        </button>
      </div>
    </div>
  );
}

export default CreatedNote;
