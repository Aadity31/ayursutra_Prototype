"use client";
import React from "react";
import { FiMapPin, FiUsers, FiUserCheck } from "react-icons/fi";
import { FaBed } from "react-icons/fa";

const HospitalCard = ({ title, value, icon, color }: any) => {
  return (
    <div
      className={`bg-white p-5 rounded-lg shadow-md flex items-center gap-3 border-t-4 ${color}`}
    >
      <div className="text-3xl">{icon}</div>
      <div>
        <h4 className="text-gray-600 text-xs uppercase tracking-wide">{title}</h4>
        <p className="text-black font-semibold text-lg">{value}</p>
      </div>
    </div>
  );
};

type Hospital = {
  name: string;
  stats: {
    title: string;
    value: string | number;
    icon: React.ReactNode;
    color: string;
  }[];
};

const hospitals: Hospital[] = [
  {
    name: "Kedar Hospital",
    stats: [
      { title: "Location", value: "Dehradun, Uttarakhand", icon: <FiMapPin className="text-indigo-500" />, color: "border-indigo-500" },
      { title: "Beds", value: 150, icon: <FaBed className="text-red-500" />, color: "border-red-500" },
      { title: "Doctors", value: 120, icon: <FiUsers className="text-green-500" />, color: "border-green-500" },
      { title: "Patients", value: 320, icon: <FiUserCheck className="text-yellow-500" />, color: "border-yellow-500" },
    ],
  },
  {
    name: "City Care Hospital",
    stats: [
      { title: "Location", value: "Dehradun, Uttarakhand", icon: <FiMapPin className="text-indigo-500" />, color: "border-indigo-500" },
      { title: "Beds", value: 100, icon: <FaBed className="text-red-500" />, color: "border-red-500" },
      { title: "Doctors", value: 90, icon: <FiUsers className="text-green-500" />, color: "border-green-500" },
      { title: "Patients", value: 280, icon: <FiUserCheck className="text-yellow-500" />, color: "border-yellow-500" },
    ],
  },
  {
    name: "Green Valley Hospital",
    stats: [
      { title: "Location", value: "Dehradun, Uttarakhand", icon: <FiMapPin className="text-indigo-500" />, color: "border-indigo-500" },
      { title: "Beds", value: 180, icon: <FaBed className="text-red-500" />, color: "border-red-500" },
      { title: "Doctors", value: 150, icon: <FiUsers className="text-green-500" />, color: "border-green-500" },
      { title: "Patients", value: 400, icon: <FiUserCheck className="text-yellow-500" />, color: "border-yellow-500" },
    ],
  },
  {
    name: "Sunrise Medical Center",
    stats: [
      { title: "Location", value: "Dehradun, Uttarakhand", icon: <FiMapPin className="text-indigo-500" />, color: "border-indigo-500" },
      { title: "Beds", value: 120, icon: <FaBed className="text-red-500" />, color: "border-red-500" },
      { title: "Doctors", value: 100, icon: <FiUsers className="text-green-500" />, color: "border-green-500" },
      { title: "Patients", value: 350, icon: <FiUserCheck className="text-yellow-500" />, color: "border-yellow-500" },
    ],
  },
  {
    name: "Healing Hands Hospital",
    stats: [
      { title: "Location", value: "Dehradun, Uttarakhand", icon: <FiMapPin className="text-indigo-500" />, color: "border-indigo-500" },
      { title: "Beds", value: 140, icon: <FaBed className="text-red-500" />, color: "border-red-500" },
      { title: "Doctors", value: 130, icon: <FiUsers className="text-green-500" />, color: "border-green-500" },
      { title: "Patients", value: 360, icon: <FiUserCheck className="text-yellow-500" />, color: "border-yellow-500" },
    ],
  },
  {
    name: "Evergreen Hospital",
    stats: [
      { title: "Location", value: "Dehradun, Uttarakhand", icon: <FiMapPin className="text-indigo-500" />, color: "border-indigo-500" },
      { title: "Beds", value: 110, icon: <FaBed className="text-red-500" />, color: "border-red-500" },
      { title: "Doctors", value: 95, icon: <FiUsers className="text-green-500" />, color: "border-green-500" },
      { title: "Patients", value: 300, icon: <FiUserCheck className="text-yellow-500" />, color: "border-yellow-500" },
    ],
  },
  {
    name: "Life Care Hospital",
    stats: [
      { title: "Location", value: "Dehradun, Uttarakhand", icon: <FiMapPin className="text-indigo-500" />, color: "border-indigo-500" },
      { title: "Beds", value: 130, icon: <FaBed className="text-red-500" />, color: "border-red-500" },
      { title: "Doctors", value: 110, icon: <FiUsers className="text-green-500" />, color: "border-green-500" },
      { title: "Patients", value: 310, icon: <FiUserCheck className="text-yellow-500" />, color: "border-yellow-500" },
    ],
  },
  {
    name: "Mountain View Hospital",
    stats: [
      { title: "Location", value: "Dehradun, Uttarakhand", icon: <FiMapPin className="text-indigo-500" />, color: "border-indigo-500" },
      { title: "Beds", value: 160, icon: <FaBed className="text-red-500" />, color: "border-red-500" },
      { title: "Doctors", value: 140, icon: <FiUsers className="text-green-500" />, color: "border-green-500" },
      { title: "Patients", value: 380, icon: <FiUserCheck className="text-yellow-500" />, color: "border-yellow-500" },
    ],
  },
  {
    name: "Riverdale Hospital",
    stats: [
      { title: "Location", value: "Dehradun, Uttarakhand", icon: <FiMapPin className="text-indigo-500" />, color: "border-indigo-500" },
      { title: "Beds", value: 125, icon: <FaBed className="text-red-500" />, color: "border-red-500" },
      { title: "Doctors", value: 105, icon: <FiUsers className="text-green-500" />, color: "border-green-500" },
      { title: "Patients", value: 330, icon: <FiUserCheck className="text-yellow-500" />, color: "border-yellow-500" },
    ],
  },
  {
    name: "Harmony Hospital",
    stats: [
      { title: "Location", value: "Dehradun, Uttarakhand", icon: <FiMapPin className="text-indigo-500" />, color: "border-indigo-500" },
      { title: "Beds", value: 135, icon: <FaBed className="text-red-500" />, color: "border-red-500" },
      { title: "Doctors", value: 115, icon: <FiUsers className="text-green-500" />, color: "border-green-500" },
      { title: "Patients", value: 340, icon: <FiUserCheck className="text-yellow-500" />, color: "border-yellow-500" },
    ],
  },
];

const HospitalPage: React.FC = () => {
  return (
    <main className="flex-1 p-6 bg-gray-50 min-h-screen space-y-16">
      <h1 className="text-4xl font-extrabold mb-10 text-indigo-900">Hospitals Overview - Dehradun</h1>

      {hospitals.map((hospital, idx) => (
        <section key={idx} className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-3xl font-extrabold mb-8 text-gray-900">{hospital.name}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {hospital.stats.map((stat, index) => (
              <HospitalCard key={index} {...stat} />
            ))}
          </div>
        </section>
      ))}
    </main>
  );
};

export default HospitalPage;
