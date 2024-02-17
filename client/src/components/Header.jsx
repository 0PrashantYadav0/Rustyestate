import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux"

function Header() {

  const { currentUser } = useSelector(state => state.user);

  return (
    <nav className="bg-slate-300 py-4 px-7 flex justify-between items-center">
      <div className="flex justify-around gap-x-12 max-sm:gap-x-4">
        <Link to="/">
          <h1 className="font-bold text-xl">
            <span className="text-slate-600">EState</span>
            <span>App</span>
          </h1>
        </Link>
        <form className="flex justify-stretch ">
          <input
            type="text"
            placeholder="Search..."
            className="py-2 px-4 rounded-l-lg max-sm:w-24 bg-slate-100 max-md:w-36"
          />
          <button className="py-2 px-6 bg-blue-500 rounded-r-lg max-sm:px-3  items-center">
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
          {currentUser ? <Link to='/profile'>
          <img src={currentUser.avatar || currentUser._doc.avatar} alt="profile" className="rounded-full h-12 w-12 bg-red-700"/>
          </Link>
          : <Link to="/sign-in">Sign in</Link> 
          }
        </li>
      </div>
    </nav>
  );
}

export default Header;
