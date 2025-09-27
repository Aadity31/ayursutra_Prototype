import React from 'react';
import { FaBed, FaUserMd, FaProcedures } from 'react-icons/fa';

const stats = [
  { label: 'Beds', value: 150, icon: <FaBed />, color: 'bg-red-100 text-red-600' },
  { label: 'Doctors', value: 120, icon: <FaUserMd />, color: 'bg-green-100 text-green-600' },
  { label: 'Patients', value: 320, icon: <FaProcedures />, color: 'bg-yellow-100 text-yellow-600' },
];

const HospitalStats = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      {stats.map((stat, idx) => (
        <div key={idx} className={`p-4 rounded-lg shadow-md flex items-center justify-between ${stat.color}`}>
          <div>
            <div className="text-lg font-semibold">{stat.label}</div>
            <div className="text-2xl font-bold">{stat.value}</div>
          </div>
          <div className="text-3xl">{stat.icon}</div>
        </div>
      ))}
    </div>
  );
};

export default HospitalStats;
