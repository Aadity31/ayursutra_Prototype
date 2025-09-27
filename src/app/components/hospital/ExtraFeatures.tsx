import React from 'react';
import { FaUserCheck, FaAmbulance, FaComments, FaStar } from 'react-icons/fa';

const features = [
  { title: 'Appointments Today', value: 45, icon: <FaUserCheck className="text-green-600" /> },
  { title: 'Emergency Cases', value: 12, icon: <FaAmbulance className="text-red-500" /> },
  { title: 'Feedback Received', value: 98, icon: <FaComments className="text-blue-500" /> },
  { title: 'Hospital Rating', value: '4.5 / 5 ⭐', icon: <FaStar className="text-yellow-500" /> },
];

const ExtraFeatures = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-900">Additional Highlights</h2>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
        {features.map((feat, idx) => (
          <div key={idx} className="text-red-600g">
            <div className="text-2xl">{feat.icon}</div>
            <div>
              <div className="text-sm text-gray-500">{feat.title}</div>
              <div className="text-red-600">{feat.value}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExtraFeatures;
