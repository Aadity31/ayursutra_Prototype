import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { date: 'Mon', patients: 30 },
  { date: 'Tue', patients: 45 },
  { date: 'Wed', patients: 50 },
  { date: 'Thu', patients: 40 },
  { date: 'Fri', patients: 60 },
  { date: 'Sat', patients: 55 },
  { date: 'Sun', patients: 35 },
];

const LineChartPatients = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-900">Weekly Patient Admissions</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="patients" stroke="#4F46E5" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartPatients;
