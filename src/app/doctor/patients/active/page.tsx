"use client";

import React from "react";
import Navbar from "../../components/doctor/Navbar";
import Sidebar from "../../components/doctor/Sidebar";
import Link from "next/link";

const activePatients = [
  { name: "John Doe", therapy: "Physiotherapy", date: "2025-09-26", time: "10:00 AM" },
  { name: "Alice Smith", therapy: "Occupational Therapy", date: "2025-09-27", time: "11:30 AM" },
  { name: "Bob Johnson", therapy: "Speech Therapy", date: "2025-09-28", time: "09:00 AM" },
];

const ActivePatientsPage: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-sky-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4 text-sky-700">Active Patients</h2>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gradient-to-r from-sky-400 to-green-400 text-white">
                <tr>
                  <th className="py-3 px-4">Patient Name</th>
                  <th className="py-3 px-4">Therapy Type</th>
                  <th className="py-3 px-4">Date</th>
                  <th className="py-3 px-4">Time</th>
                  <th className="py-3 px-4">Report</th>
                </tr>
              </thead>
              <tbody>
                {activePatients.map((p, idx) => (
                  <tr key={idx} className="border-b border-gray-200 hover:bg-sky-100 transition-colors">
                    <td className="py-3 px-4">{p.name}</td>
                    <td className="py-3 px-4">{p.therapy}</td>
                    <td className="py-3 px-4">{p.date}</td>
                    <td className="py-3 px-4">{p.time}</td>
                    <td className="py-3 px-4 text-blue-600 cursor-pointer hover:underline">
                      <Link href={`/doctor/patients/report/${idx}`}>View Report</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivePatientsPage;
