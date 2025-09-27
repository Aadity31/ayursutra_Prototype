"use client";

import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const data = [
  { name: "Completed", value: 40 },
  { name: "Pending", value: 25 },
  { name: "Cancelled", value: 10 },
  { name: "Rescheduled", value: 5 },
];

const COLORS = ["#4ade80", "#facc15", "#f87171", "#60a5fa"];

const AppointmentStatusDonut: React.FC = () => (
  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
    <h3 className="text-lg font-semibold mb-4 text-gray-900">Appointment Status</h3>
    <PieChart width={300} height={250}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        innerRadius={60}
        outerRadius={90}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  </div>
);

export default AppointmentStatusDonut;
