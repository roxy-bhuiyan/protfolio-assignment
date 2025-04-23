import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Left Section (Logo and Navigation Links) */}
        <div className="flex items-center space-x-4">
          <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center">
            <span className="text-xl font-semibold">R</span>
          </div>
          <span className="text-2xl font-semibold">Roxy Bhuiyan</span>
        </div>

        {/* Right Section (Navigation Links and Copyright) */}
        <div className="flex space-x-6">
          <a href="#home" className="text-lg hover:text-purple-600 transition duration-300">
            Home
          </a>
          <a href="#about" className="text-lg hover:text-purple-600 transition duration-300">
            About
          </a>
          <a href="#services" className="text-lg hover:text-purple-600 transition duration-300">
            Services
          </a>
          <a href="#process" className="text-lg hover:text-purple-600 transition duration-300">
            Process
          </a>
          <a href="#projects" className="text-lg hover:text-purple-600 transition duration-300">
            Projects
          </a>
          <a href="#blog" className="text-lg hover:text-purple-600 transition duration-300">
            Blog
          </a>
          <a href="#contact" className="text-lg hover:text-purple-600 transition duration-300">
            Contact
          </a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-4 text-center text-sm text-gray-400">
        <p>Copyright © 2025. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
