import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="bg-slate-500 py-4 px-7 flex justify-between items-center">
      <div className="flex justify-around gap-x-12">
        <Link to="/">
          <h1 className="font-bold text-xl">
            <span className="text-slate-600">EState</span>
            <span>App</span>
          </h1>
        </Link>
        <form className="flex justify-stretch">
          <input
            type="text"
            placeholder="Search..."
            className="py-2 px-4 rounded-l-lg bg-slate-100 max-md:w-36"
          />
          <button className="py-2 px-6 bg-blue-500 rounded-r-lg items-center">
            <FaSearch />
          </button>
        </form>
      </div>
      <div className="flex justify-between items-center gap-x-12 p max-md:gap-x-6">
        <li className="hover:underline text-slate-700 list-none sm:inline hidden">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:underline text-slate-700 list-none sm:inline hidden">
          <Link to="/about">About</Link>
        </li>
        <li className="hover:underline text-slate-700 list-none">
          <Link to="/sign-in">Sign in</Link>
        </li>
      </div>
    </nav>
  );
}

export default Header;
