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
  established: number;
  contact: string;
  email: string;
  website: string;
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
    established: 1995,
    contact: "+91 135 1234567",
    email: "info@kedarthospital.com",
    website: "https://kedarthospital.com",
    stats: [
      { title: "Location", value: "Dehradun, Uttarakhand", icon: <FiMapPin className="text-indigo-500" />, color: "border-indigo-500" },
      { title: "Beds", value: 150, icon: <FaBed className="text-red-500" />, color: "border-red-500" },
      { title: "Doctors", value: 120, icon: <FiUsers className="text-green-500" />, color: "border-green-500" },
      { title: "Patients", value: 320, icon: <FiUserCheck className="text-yellow-500" />, color: "border-yellow-500" },
    ],
  },
  {
    name: "City Care Hospital",
    established: 2002,
    contact: "+91 135 2345678",
    email: "contact@citycare.com",
    website: "https://citycare.com",
    stats: [
      { title: "Location", value: "Dehradun, Uttarakhand", icon: <FiMapPin className="text-indigo-500" />, color: "border-indigo-500" },
      { title: "Beds", value: 100, icon: <FaBed className="text-red-500" />, color: "border-red-500" },
      { title: "Doctors", value: 90, icon: <FiUsers className="text-green-500" />, color: "border-green-500" },
      { title: "Patients", value: 280, icon: <FiUserCheck className="text-yellow-500" />, color: "border-yellow-500" },
    ],
  },
  {
    name: "Green Valley Hospital",
    established: 2010,
    contact: "+91 135 3456789",
    email: "hello@greenvalley.com",
    website: "https://greenvalley.com",
    stats: [
      { title: "Location", value: "Dehradun, Uttarakhand", icon: <FiMapPin className="text-indigo-500" />, color: "border-indigo-500" },
      { title: "Beds", value: 180, icon: <FaBed className="text-red-500" />, color: "border-red-500" },
      { title: "Doctors", value: 150, icon: <FiUsers className="text-green-500" />, color: "border-green-500" },
      { title: "Patients", value: 400, icon: <FiUserCheck className="text-yellow-500" />, color: "border-yellow-500" },
    ],
  },
  // ... You can add the same details to other hospitals similarly
  {
    name: "Sunrise Medical Center",
    established: 2005,
    contact: "+91 135 4567890",
    email: "support@sunrisemedical.com",
    website: "https://sunrisemedical.com",
    stats: [
      { title: "Location", value: "Dehradun, Uttarakhand", icon: <FiMapPin className="text-indigo-500" />, color: "border-indigo-500" },
      { title: "Beds", value: 120, icon: <FaBed className="text-red-500" />, color: "border-red-500" },
      { title: "Doctors", value: 100, icon: <FiUsers className="text-green-500" />, color: "border-green-500" },
      { title: "Patients", value: 350, icon: <FiUserCheck className="text-yellow-500" />, color: "border-yellow-500" },
    ],
  },
  // Continue similarly for others...
];

const HospitalPage: React.FC = () => {
  return (
    <main className="flex-1 p-6 bg-gray-50 min-h-screen space-y-16">
      <h1 className="text-4xl font-extrabold mb-10 text-indigo-900">
        Hospitals Overview - Dehradun
      </h1>

      {hospitals.map((hospital, idx) => (
        <section
          key={idx}
          className="bg-white rounded-xl shadow-md p-6 space-y-4"
        >
          <h2 className="text-3xl font-extrabold text-gray-900">
            {hospital.name}
          </h2>

          {/* New details section */}
          <div className="text-gray-700 space-y-1 text-sm">
            <p>
              <strong>Established:</strong> {hospital.established}
            </p>
            <p>
              <strong>Contact:</strong> {hospital.contact}
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a
                href={`mailto:${hospital.email}`}
                className="text-indigo-600 hover:underline"
              >
                {hospital.email}
              </a>
            </p>
            <p>
              <strong>Website:</strong>{" "}
              <a
                href={hospital.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:underline"
              >
                {hospital.website}
              </a>
            </p>
          </div>

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
