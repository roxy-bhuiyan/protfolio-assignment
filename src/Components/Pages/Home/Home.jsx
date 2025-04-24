import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-white text-black py-16 px-6 md:px-12 lg:px-20  ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center  ">
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Hello, Iam<br />
            <span className="text-purple-600">Roxy Bhuiyan</span>
          </h1>
          <p className="text-lg text-black-300 mb-8">
          As a experience Full Stack Web and Blockchain Developer, I specialize in designing, developing, and deploying web applications and blockchain solutions. My expertise spans across both front-end and back-end development, leveraging technologies such as React.js,Next.js Node.js, MongoDB, Vercel, AWS and Solidity to create seamless, efficient, and secure decentralized applications.
          </p>

          <a
            href="#contact"
            className="inline-block bg-purple-600 text-white px-6 py-2 rounded-md shadow-md hover:bg-purple-700 transition"
          >
            Say Hello!
          </a>

          {/* Experience */}
          <div className="flex flex-col sm:flex-row gap-6">
            
            <div className="mt-8 grid grid-cols-3 gap-1 text-gray-600">
            <div className="bg-purple-100 p-4 rounded-lg text-center">
              <p className="text-2xl font-semibold text-indigo-600">1 Y.</p>
              <p>Experience</p>
            </div>
            <div className="bg-purple-100 p-4 rounded-lg text-center">
              <p className="text-2xl font-semibold text-indigo-600">25+</p>
              <p>Project Completed</p>
            </div>
            <div className="bg-purple-100 p-4 rounded-lg text-center">
              <p className="text-2xl font-semibold text-indigo-600">19</p>
              <p>Happy Clients</p>
            </div>
          </div>
          </div>
        </div>
        

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/roxy2.png" 
            alt="Blockchain Developer"
            className="w-full max-w-md rounded-2xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;