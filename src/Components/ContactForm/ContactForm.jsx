import React from "react";

const ContactForm = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-6 lg:px-12 text-center lg:text-left">
        <div className="lg:flex lg:justify-between items-center">
          {/* Left Section */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <h2 className="text-4xl font-semibold text-gray-800 mb-4">Let’s discuss your Project</h2>
            <p className="text-lg text-gray-600 mb-6">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
            </p>
            <div className="text-left space-y-4">
              <div className="flex items-center space-x-3">
                <div className="bg-indigo-100 text-purple-600 p-3 rounded-full">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <p className="text-gray-800">
                  <span className="font-semibold">Address:</span> Sirajganj
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-indigo-100 text-purple-600 p-3 rounded-full">
                  <i className="fas fa-envelope"></i>
                </div>
                <p className="text-gray-800">
                  <span className="font-semibold">My Email:</span> majadul.roxybhuiyan@gmail.com
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-indigo-100 text-purple-600 p-3 rounded-full">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <p className="text-gray-800">
                  <span className="font-semibold">Call Me Now:</span> +8801833044106
                </p>
              </div>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-600 hover:text-purple-600">
                  <i className="fab fa-facebook-f text-2xl"></i>
                </a>
                <a href="#" className="text-gray-600 hover:text-purple-600">
                  <i className="fab fa-behance text-2xl"></i>
                </a>
                <a href="#" className="text-gray-600 hover:text-purple-600">
                  <i className="fab fa-instagram text-2xl"></i>
                </a>
                <a href="#" className="text-gray-600 hover:text-purple-600">
                  <i className="fab fa-linkedin-in text-2xl"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Right Section (Form) */}
          <div className="w-full lg:w-1/2 bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Contact Us</h3>
            <form action="#" method="POST">
              <div className="grid grid-cols-1 gap-4 mb-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name*"
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email*"
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
               
              
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Message*"
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-3 rounded-full hover:bg-purple-700 transition ease-in-out duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
