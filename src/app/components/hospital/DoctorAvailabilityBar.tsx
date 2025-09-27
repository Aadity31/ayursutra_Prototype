"use client";

import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { doctor: "Dr. Smiriti ", available: 8 },
  { doctor: "Dr. Juhi ", available: 5 },
  { doctor: "Dr. Rakesh ", available: 7 },
  { doctor: "Dr. Lalit ", available: 6 },
  { doctor: "Dr. Jatin ", available: 4 },
];

const DoctorAvailabilityBar: React.FC = () => (
  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
    <h3 className="text-lg font-semibold mb-4 text-gray-900">Doctor Availability (hrs)</h3>
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <XAxis dataKey="doctor" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="available" fill="#2563eb" />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default DoctorAvailabilityBar;
