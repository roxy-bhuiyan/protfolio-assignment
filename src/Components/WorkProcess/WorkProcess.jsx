import React from "react";

const WorkProcess = () => {
  return (
    <div class="work-process py-12 bg-gray-100">
  <div class="container mx-auto px-6 lg:px-12 text-center">
    <h2 class="text-4xl font-semibold text-gray-800 mb-8">Work Process</h2>
    <p class="text-lg text-gray-600 mb-12">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci.
    </p>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div class="work-step bg-white shadow-xl rounded-lg p-6 text-center">
        <div class="icon bg-purple-100 text-purple-600 p-4 rounded-full mb-4">
          <i class="fas fa-calendar-check text-2xl"></i>
        </div>
        <h3 class="text-xl font-semibold text-gray-800 mb-2">1. Research</h3>
        <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.</p>
      </div>
      <div class="work-step bg-white shadow-xl rounded-lg p-6 text-center">
        <div class="icon bg-purple-100 text-purple-600 p-4 rounded-full mb-4">
          <i class="fas fa-chart-line text-2xl"></i>
        </div>
        <h3 class="text-xl font-semibold text-gray-800 mb-2">2. Analyze</h3>
        <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.</p>
      </div>
      <div class="work-step bg-white shadow-xl rounded-lg p-6 text-center">
        <div class="icon bg-purple-100 text-purple-600 p-4 rounded-full mb-4">
          <i class="fas fa-pencil-alt text-2xl"></i>
        </div>
        <h3 class="text-xl font-semibold text-gray-800 mb-2">3. Design</h3>
        <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.</p>
      </div>
      <div class="work-step bg-white shadow-xl rounded-lg p-6 text-center">
        <div class="icon bg-purple-100 text-purple-600 p-4 rounded-full mb-4">
          <i class="fas fa-rocket text-2xl"></i>
        </div>
        <h3 class="text-xl font-semibold text-gray-800 mb-2">4. Launch</h3>
        <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.</p>
      </div>
    </div>
  </div>
</div>

  );
};

export default WorkProcess;
