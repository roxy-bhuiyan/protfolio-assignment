import React from "react";

const About = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl font-semibold text-gray-800 mb-6">What I do?</h2>
          <p className="text-lg text-gray-600 mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci.
          </p>
          <button className="bg-purple-600 text-white py-2 px-6 rounded-full hover:bg-indigo-700 transition ease-in-out duration-300">
            Say Hello!
          </button>
        </div>

        <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
          <div className="space-y-8">
            <div className="bg-white shadow-xl rounded-lg p-6">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">User Experience (UX)</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci.
              </p>
            </div>
            <div className="bg-white shadow-xl rounded-lg p-6">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">User Interface (UI)</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci.
              </p>
            </div>
            <div className="bg-white shadow-xl rounded-lg p-6">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">Web Development</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
