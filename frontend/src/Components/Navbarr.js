import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="bg-slate-800 text-slate-50">
      <div className="max-w-5xl flex justify-between items-center gap-3 mx-auto">
        <ul className="flex space-x-2 gap-3 items-center ml-7 ">
          <li className="font-serif text-xl text-red-600 hover:bg-slate-700 transition-all duration-300 p-2 rounded-md">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:bg-slate-700 transition-all duration-300 p-2 rounded-md">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:bg-slate-700 transition-all duration-300 p-2 rounded-md">
            <Link to="/parking">Parking</Link>
          </li>
          <div className="relative p-2 left-[700px]">
            <button
              className="inline-block px-2 py-2 text-white border-white border-1 rounded-2xl bg-slate-600 hover:bg-slate-700 transition-all duration-300"
            >
              Log Out
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
}
