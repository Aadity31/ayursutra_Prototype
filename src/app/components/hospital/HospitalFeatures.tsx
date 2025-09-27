import React from 'react';
import { FaClock, FaStethoscope, FaStar } from 'react-icons/fa';

const HospitalFeatures = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-900">Hospital Features</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="flex items-center gap-3">
          <FaClock className="text-indigo-500 text-2xl" />
          <div>
            <div className="text-sm text-gray-500">Timings</div>
            <div className="text-green-600">24x7</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <FaStethoscope className="text-pink-500 text-2xl" />
          <div>
            <div className="text-sm text-gray-500">Therapists</div>
            <div className="text-green-600">12</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <FaStar className="text-yellow-500 text-2xl" />
          <div>
            <div className="text-sm text-gray-500">Specialties</div>
            <div className="text-green-600">Cardio, Ortho, Neuro</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalFeatures;
