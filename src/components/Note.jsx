import React from "react";
import { FaTrashAlt } from "react-icons/fa";
function Note({ title, id, content, date, deletingNote, time }) {
  return (
    <>
      <h1 className="text-3xl font-bold">{title}</h1>
      <div className="flex flex-col justify-between px-3 w-[90%] h-[30%] break-all backdrop-blur-xl z-10  bg-[#61626362] rounded-lg">
        <div>
          <h1 className=" py-1 text-xl border-b-[1px] border-[#0000009a] ">
            Note
          </h1>
          <p className="pt-2">{content}</p>
        </div>
        <div className=" pb-1 flex justify-between">
          <p className="text-[13px] text-[#999999]">
            Created on:{" "}
            <span>
              {date} - {time}
            </span>
          </p>
          <button onClick={() => deletingNote(id)}>
            <FaTrashAlt size="18px" className="text-[#f76440]" />
          </button>
        </div>
      </div>
    </>
  );
}

export default Note;
