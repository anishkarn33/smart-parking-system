import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Link } from "react-router-dom";

const Navbar = () => {
  const history = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    history("/login"); // Redirect to login page after logout
    toast.success("Logout successful");
  };

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      <ul className="flex flex-row space-x-4 justify-start items-center">
        <li>
          <h1 className="text-xl font-bold">Smart Parking System</h1>
        </li>
        <li className="font-serif text-xl text-red-600 hover:bg-slate-700 transition-all duration-300 p-2 rounded-md">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:bg-slate-700 transition-all duration-300 p-2 rounded-md">
          <Link to="/about">About</Link>
        </li>
        <li className="hover:bg-slate-700 transition-all duration-300 p-2 rounded-md">
          <Link to="/choose-booking">Parking</Link>
        </li>
      </ul>
      <button
        type="button"
        onClick={handleLogout}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
