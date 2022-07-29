import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
function Search() {
  return (
    <>
      <AiOutlineSearch size="30px" />
      <input
        className="w-full bg-transparent focus:outline-none pl-3"
        type="text"
        placeholder="Search your notes..."
      />
    </>
  );
}

export default Search;
