import React from 'react';
import { Link } from 'react-router-dom';
import Rooms from "../HomePage/Rooms/rooms";


function Navbar() {
  return (
    <div>
    <nav className="bg-white border-b border-gray-200 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-semibold text-gray-800">
              Haritha Women's PG
            </h1>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="text-gray-600 hover:text-gray-800">
              Home
            </Link>
            <Link to="/signup" className="text-gray-600 hover:text-gray-800">
              Signup
            </Link>
            <Link to="/login" className="text-gray-600 hover:text-gray-800">
              Login
            </Link>
          </div>
          <div className="flex md:hidden items-center">
            <button type="button" className="text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800">
              <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
    <Rooms/>
    </div>
  );
}

export default Navbar;