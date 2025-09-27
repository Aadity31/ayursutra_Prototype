"use client";
import React from "react";
import { FiMapPin, FiUsers, FiUserCheck } from "react-icons/fi";
import { FaBed } from "react-icons/fa";

// Props type for HospitalCard
type HospitalCardProps = {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  color: string;
};

const HospitalCard: React.FC<HospitalCardProps> = ({ title, value, icon, color }) => {
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
  location: string;
  beds: number;
  doctors: number;
  patients: number;
};

// Helper to generate stats from hospital data
const generateStats = (hospital: Hospital): HospitalCardProps[] => [
  {
    title: "Location",
    value: hospital.location,
    icon: <FiMapPin className="text-indigo-500" />,
    color: "border-indigo-500",
  },
  {
    title: "Beds",
    value: hospital.beds,
    icon: <FaBed className="text-red-500" />,
    color: "border-red-500",
  },
  {
    title: "Doctors",
    value: hospital.doctors,
    icon: <FiUsers className="text-green-500" />,
    color: "border-green-500",
  },
  {
    title: "Patients",
    value: hospital.patients,
    icon: <FiUserCheck className="text-yellow-500" />,
    color: "border-yellow-500",
  },
];

const hospitals: Hospital[] = [
  { name: "Kedar Hospital", location: "Dehradun, Uttarakhand", beds: 150, doctors: 120, patients: 320 },
  { name: "City Care Hospital", location: "Dehradun, Uttarakhand", beds: 100, doctors: 90, patients: 280 },
  { name: "Green Valley Hospital", location: "Dehradun, Uttarakhand", beds: 180, doctors: 150, patients: 400 },
  { name: "Sunrise Medical Center", location: "Dehradun, Uttarakhand", beds: 120, doctors: 100, patients: 350 },
  { name: "Healing Hands Hospital", location: "Dehradun, Uttarakhand", beds: 140, doctors: 130, patients: 360 },
  { name: "Evergreen Hospital", location: "Dehradun, Uttarakhand", beds: 110, doctors: 95, patients: 300 },
  { name: "Life Care Hospital", location: "Dehradun, Uttarakhand", beds: 130, doctors: 110, patients: 310 },
  { name: "Mountain View Hospital", location: "Dehradun, Uttarakhand", beds: 160, doctors: 140, patients: 380 },
  { name: "Riverdale Hospital", location: "Dehradun, Uttarakhand", beds: 125, doctors: 105, patients: 330 },
  { name: "Harmony Hospital", location: "Dehradun, Uttarakhand", beds: 135, doctors: 115, patients: 340 },
];

const HospitalPage: React.FC = () => {
  return (
    <main className="flex-1 p-6 bg-gray-50 min-h-screen space-y-16">
      <h1 className="text-4xl font-extrabold mb-10 text-indigo-900">
        Hospitals Overview - Dehradun
      </h1>

      {hospitals.map((hospital, idx) => (
        <section key={idx} className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-3xl font-extrabold mb-8 text-gray-900">
            {hospital.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {generateStats(hospital).map((stat, index) => (
              <HospitalCard key={index} {...stat} />
            ))}
          </div>
        </section>
      ))}
    </main>
  );
};

export default HospitalPage;
