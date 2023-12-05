import React from "react";

export default function Profile() {
  return (
    <div className="bg-[#222e35] w-[50%] h-full absolute left-0 top-0 z-50">
      {/* Back arrow and profile */}
      <div className="flex items-center w-full gap-4 pt-8">
        {/* Arrow icon */}
        <div
          className="mx-3 my-2"
          onClick={() =>
            document.querySelector("details").removeAttribute("open")
          }
        >
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
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </div>

        {/* Profile */}
        <div className="mx-3 my-2">
          <h1 className="text-2xl text-gray-300">profile</h1>
        </div>
      </div>

      <div className="bg-[#111b21] h-full py-9">
        {/* Profile image change */}
        <div className="flex items-center justify-center w-full ">
          <img
            className="w-48 h-48 rounded-full"
            src="https://media-vie1-1.cdn.whatsapp.net/v/t61.24694-24/370350481_1693803644452626_4121957963409312603_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdS661bXduMWkmnTKxV4ERUAHb4SlKjp-eE2IBKoPT8Aww&oe=657B4285&_nc_sid=e6ed6c&_nc_cat=106"
            alt="Murtaza"
          />
        </div>

        {/* Name */}
        <div className="flex flex-col justify-around w-full">
          {/* First name */}
          <div className="flex flex-col items-center px-4">
            <label htmlFor="yourName" className="mr-auto text-green-700">
              your name
            </label>

            <div className="flex items-center justify-between w-full mt-4">
              <h2 className="text-lg text-gray-300">Murtaza</h2>
              {/* Edit icon */}
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-gray-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                  />
                </svg>
              </div>
            </div>

            {/* text */}
            <div className="w-full pr-8 my-4">
              <p className="text-sm text-gray-300">
                This is not your username or pin. This name will be visible to
                your WhatsApp contacts.
              </p>
            </div>
          </div>
          {/* About */}
          <div className="flex flex-col items-center px-4 my-12">
            <label htmlFor="yourName" className="mr-auto text-green-700">
              about
            </label>

            <div className="flex items-center justify-between w-full mt-4">
              <h2 className="text-lg text-gray-300">Murtaza</h2>
              {/* Edit icon */}
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-gray-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                  />
                </svg>
              </div>
            </div>

            {/* text */}
            <div className="w-full pr-8 my-4">
              <p className="text-sm text-gray-300">.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
