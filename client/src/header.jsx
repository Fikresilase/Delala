import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="flex justify-between">
      <a className="font-bold text-2xl text-red-500"> Delala</a>
      <div className="flex justify-between rounded-full shadow-lg p-4">
        <div className="px-2 font-medium ">Any where</div>
        <div className="h-7 border-l-2 border-gray-200"></div>
        <div className="px-2 font-medium">Any week</div>
        <div className="h-7 border-l-2 border-gray-200"></div>
        <div className="px-2 font-medium">Add gusts</div>
        <button className="bg-red-500 rounded-full text-white px-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
      </div>
      <div className="flex  rounded-full shadow-lg p-4 items-center ">
        <div className="px-1 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
        <Link
          to={"/login"}
          className="px-1 bg-gray-500 text-white rounded-full border border-gray-500 overflow-hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>
    </header>
  );
}

export default Header;
