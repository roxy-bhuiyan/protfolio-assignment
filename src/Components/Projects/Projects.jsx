import React from "react";

const Projects = () => {
  return (
    <div className=" py-12">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-4xl font-semibold text-gray-800 mb-6">Projects</h2>
        <p className="text-lg text-gray-600 mb-12">
          These are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="/project1.png"
              alt="Project 1"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Protfolio Website</h3>
              <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <a
                href="#"
                className="text-purple-600 hover:text-indigo-700 font-semibold"
              >
                Case Study &rarr;
              </a>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="/project1.png"
              alt="Project 2"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Ecommerce Website</h3>
              <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <a
                href="#"
                className="text-purple-600 hover:text-indigo-700 font-semibold"
              >
                Case Study &rarr;
              </a>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="/project1.png"
              alt="Project 3"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Mem Coin Website</h3>
              <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <a
                href="#"
                className="text-purple-600 hover:text-indigo-700 font-semibold"
              >
                Case Study &rarr;
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center">
          <a
            href="#"
            className="bg-purple-600 text-white py-2 px-6 rounded-full hover:bg-indigo-700 transition ease-in-out duration-300"
          >
            View Project
          </a>
        </div>
        <div className="mt-20 bg-black text-white py-12">
          <h3 className="text-3xl font-semibold mb-4">Do you have a Project Idea?</h3>
          <p className="text-xl mb-8">Let’s discuss your project!</p>
          <a
            href="#"
            className="bg-purple-600 text-white py-2 px-6 rounded-full hover:bg-indigo-700 transition ease-in-out duration-300"
          >
            Let’s work together &rarr;
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
