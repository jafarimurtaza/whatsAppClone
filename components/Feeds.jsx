import React from "react";
import SearchBar from "./SearchBar";

function UserList() {
  return (
    <div className="flex items-center w-full cursor-pointer hover:bg-[#222e35] py-3 hover:duration-300 group">
      {/* User profile */}
      <div className="w-16 mx-4">
        <img
          className="w-10 h-10 rounded-full"
          src="https://media-vie1-1.cdn.whatsapp.net/v/t61.24694-24/370350481_1693803644452626_4121957963409312603_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdS661bXduMWkmnTKxV4ERUAHb4SlKjp-eE2IBKoPT8Aww&oe=657B4285&_nc_sid=e6ed6c&_nc_cat=106"
          alt="Murtaza"
        />
      </div>

      {/* Username and date*/}
      <div className="flex items-start justify-between w-full gap-4 mr-5 border-b">
        <span className="text-gray-300">Murtaza Jafari</span>
        {/* Date */}
        <span className="text-gray-500">4/11/2023</span>
      </div>

      <div className="hidden group-hover:block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-gray-300 transition-all transform cursor-pointer hover:scale-100 hover:text-blue-300 hover:duration-200"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
    </div>
  );
}
export default function Feeds() {
  return (
    <div className="bg-[#111b21] w-full flex flex-col items-start h-full gap-8 overflow-y-scroll">
      <SearchBar />

      {/* User list */}
      <UserList />
      <UserList />
      <UserList />
      <UserList />
      <UserList />
      <UserList />
      <UserList />
      <UserList />
      <UserList />
    </div>
  );
}
