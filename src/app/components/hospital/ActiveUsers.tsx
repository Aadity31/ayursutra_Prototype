"use client";

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const ActiveUsers: React.FC = () => {
  const monthlyUsers = [
    { month: "Jan", users: 200 },
    { month: "Feb", users: 300 },
    { month: "Mar", users: 250 },
    { month: "Apr", users: 400 },
    { month: "May", users: 350 },
    { month: "Jun", users: 450 },
    { month: "Jul", users: 500 },
    { month: "Aug", users: 480 },
    { month: "Sep", users: 520 },
    { month: "Oct", users: 550 },
    { month: "Nov", users: 600 },
    { month: "Dec", users: 650 },
  ];

  return (
    <div className="bg-white shadow-md rounded-xl p-6 h-72">
      <h2 className="text-lg font-semibold mb-4 text-gray-800">Active Users Per Month</h2>
      <ResponsiveContainer width="100%" height="80%">
        <BarChart data={monthlyUsers} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="users" fill="#3182ce" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ActiveUsers;
