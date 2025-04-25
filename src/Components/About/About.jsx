import React from "react";

const About = () => {
  return (
    <div id="about" className="bg-gray-50 py-12">
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl font-semibold text-gray-800 mb-6">What I do?</h2>
          <p className="text-lg text-gray-600 mb-12">
          With a strong focus on both technical innovation and digital marketing, I deliver end-to-end solutions that integrate web development with impactful search marketing strategies, ensuring optimal performance and business growth.
          As a experience Full Stack Web and Blockchain Developer, I specialize in designing, developing, and deploying web applications and blockchain solutions. My expertise spans across both front-end and back-end development, leveraging technologies such as React.js,Next.js Node.js
          </p>
          <button className="bg-purple-600 text-white py-2 px-6 rounded-full hover:bg-indigo-700 transition ease-in-out duration-300">
            Say Hello!
          </button>
        </div>

        <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
          <div className="space-y-8">
            <div className="bg-white shadow-xl rounded-lg p-6">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">Web Development (UX)</h3>
              <p className="text-gray-600">
              I specialize in designing, developing, and deploying web applications and blockchain solutions. 
              </p>
            </div>
            <div className="bg-white shadow-xl rounded-lg p-6">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">Blockchain Development (UI)</h3>
              <p className="text-gray-600">
              web applications and blockchain solutions.
              </p>
            </div>
            <div className="bg-white shadow-xl rounded-lg p-6">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">SEM Expert</h3>
              <p className="text-gray-600">
              With a strong focus on both technical innovation and digital marketing,
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
