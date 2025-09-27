import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Doctors', count: 120 },
  { name: 'Patients', count: 320 },
  { name: 'Therapists', count: 40 },
  { name: 'Rooms', count: 100 },
];

const HospitalChart = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-900">Hospital Overview Chart</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#7C3AED" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default HospitalChart;
