import { Lightbulb, Search, PencilRuler, Rocket } from 'lucide-react';

const WorkProcess = () => {
  return (
    <section>
      <div className="grid grid-cols-1  md:grid-cols-2 gap-8 items-center p-8 bg-gray-50 py-16 px-6 md:px-12">
      {/* Left Side Text */}
      <div>
        <h2 className="text-3xl font-bold mb-4">Our Work Process</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          We follow a streamlined and efficient work process to deliver exceptional results. Our strategy ensures quality, clarity, creativity, and timely execution to bring your ideas to life and help your brand grow with precision and impact.
        </p>
      </div>

      {/* Right Side - 4 Cards in  grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Card 1 */}
        <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-xl transition">
          <Lightbulb className="w-10 h-10 text-indigo-600 mb-4" />
          <h3 className="font-semibold text-xl mb-2">Research</h3>
          <p className="text-gray-600">We dive deep to understand your goals, audience, and market to lay a strong foundation.</p>
        </div>
        {/* Card 2 */}
        <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-xl transition">
          <Search className="w-10 h-10 text-blue-600 mb-4" />
          <h3 className="font-semibold text-xl mb-2">Analyze</h3>
          <p className="text-gray-600">We assess all insights to plan the best approach for achieving your desired outcomes.</p>
        </div>
        {/* Card 3 */}
        <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-xl transition">
          <PencilRuler className="w-10 h-10 text-green-600 mb-4" />
          <h3 className="font-semibold text-xl mb-2">Design</h3>
          <p className="text-gray-600">We creatively design engaging, user-friendly solutions tailored to your specific needs.</p>
        </div>
        {/* Card 4 */}
        <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-xl transition">
          <Rocket className="w-10 h-10 text-red-600 mb-4" />
          <h3 className="font-semibold text-xl mb-2">Launch</h3>
          <p className="text-gray-600">We execute the final delivery with precision, ensuring smooth deployment and impact.</p>
        </div>
      </div>
    </div>
    </section>
  );
};

export default WorkProcess;
