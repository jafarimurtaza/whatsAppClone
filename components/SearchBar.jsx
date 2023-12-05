import React from "react";

export default function SearchBar() {
  return (
    <div className="w-full">
      <input
        type="search"
        name="search"
        id="search"
        className="w-full h-10 p-4 mx-4 placeholder-gray-300 bg-[#222e35] my-3 rounded-md"
        placeholder="Search or start new chat"
      />
    </div>
  );
}
