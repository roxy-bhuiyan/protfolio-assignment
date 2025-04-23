import React from 'react';

const StatsCard = () => {
  const stats = [
    { value: '1 Y.', label: 'Experience' },
    { value: '25+', label: 'Completed' },
    { value: '19', label: 'Happy Client' },
  ];

  return (
    <div className="flex bg-purple-50 rounded-lg overflow-hidden text-center shadow-md border-1px gap-5px">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`px-6 py-4 ${index < stats.length - 1 ? 'border-r border-purple-200' : ''}`}
        >
          <h3 className="text-2xl font-bold text-gray-800">{stat.value}</h3>
          <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsCard;
