import React from 'react';



const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm w-full fixed lg:px-16 ">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between ">
        
        {/* Left: Logo and Name */}
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-purple-600 text-white font-bold flex items-center justify-center rounded-full">
            R {/* Frist latter of name */}
          </div>
          <span className="text-lg font-semibold text-gray-900">ROXY BHUIYAN</span> {/* name logo*/}
        </div>

        {/* Middle: Navigation Links */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium text-gray-700">
          <li><a href="/" className="hover:text-purple-600">Home</a></li>
          <li><a href="#WorkProcess" className="hover:text-purple-600">Process</a></li>
          <li><a href="#projects" className="hover:text-purple-600">Projects</a></li>
          <li><a href="#about" className="hover:text-purple-600">About</a></li>
          
          
          <li><a href="#services" className="hover:text-purple-600">Services</a></li>
        </ul>

        {/* Right: Contact Button */}
        <a href="#contact" className="ml-4 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 text-sm rounded-md transition">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
