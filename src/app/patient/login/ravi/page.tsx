'use client'

import React, { useState } from 'react';
import { LayoutDashboard, Hospital, Settings, User, Search, Bell, ChevronDown } from 'lucide-react';

// Mock data moved outside the component, simulating a fetch from a database
const initialPatients = [
  {
    name: 'Patient 1',
    email: 'esthera@simmmple.com',
    reportStatus: 'Completed',
    therapyType: 'VATA',
    therapyTime: '11:25 AM',
    session: '14/06',
  },
  {
    name: 'Patient 2',
    email: 'alex@simmmple.com',
    reportStatus: 'Completed',
    therapyType: 'PITTA',
    therapyTime: '11:30 AM',
    session: '14/06',
  },
  {
    name: 'Patient 3',
    email: 'laurent@simmmple.com',
    reportStatus: 'Completed',
    therapyType: 'KAPHA',
    therapyTime: '11:45 AM',
    session: '14/06',
  },
  {
    name: 'Patient 4',
    email: 'eduardo@simmmple.com',
    reportStatus: 'In Progress',
    therapyType: 'KAPHA',
    therapyTime: '12:00 PM',
    session: '15/06',
  },
  {
    name: 'Patient 5',
    email: 'carla@simmmple.com',
    reportStatus: 'Completed',
    therapyType: 'KAPHA',
    therapyTime: '12:15 PM',
    session: '15/06',
  },
  {
    name: 'Patient 6',
    email: 'mark@simmmple.com',
    reportStatus: 'Pending',
    therapyType: 'VATA',
    therapyTime: '12:30 PM',
    session: '16/06',
  },
];

// Reusable component for sidebar links
const NavLink = ({ icon, children, active = false }) => (
  <a
    href="#"
    className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors duration-200 ${
      active
        ? 'bg-teal-500 text-white shadow-lg'
        : 'text-gray-600 hover:bg-gray-100'
    }`}
  >
    {icon}
    <span className="ml-3">{children}</span>
  </a>
);

// Patient table row component
const PatientRow = ({ patient }) => (
  <tr className="border-b border-gray-200 hover:bg-gray-50">
    <td className="py-4 px-6">
      <div className="flex items-center">
        <div className="bg-blue-100 p-2 rounded-lg mr-4">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="#4A90E2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 7L12 12" stroke="#4A90E2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 22V12" stroke="#4A90E2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 7L12 12" stroke="#4A90E2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17 4.5L7 9.5" stroke="#4A90E2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
        <div>
          <p className="font-semibold text-gray-800">{patient.name}</p>
          <p className="text-xs text-gray-500">{patient.email}</p>
        </div>
      </div>
    </td>
    <td className="py-4 px-6 text-sm text-gray-600">{patient.reportStatus}</td>
    <td className="py-4 px-6 text-sm font-medium text-gray-800">{patient.therapyType}</td>
    <td className="py-4 px-6 text-sm text-gray-600">{patient.therapyTime}</td>
    <td className="py-4 px-6 text-sm text-gray-600">{patient.session}</td>
    <td className="py-4 px-6">
      <a href="#" className="text-teal-600 hover:text-teal-800 font-semibold text-sm">
        View Report
      </a>
    </td>
  </tr>
);

export default function PatientDashboard() {
  // Use state to manage patient data, making it dynamic
  const [patients, setPatients] = useState(initialPatients);

  // In a real application, you would use an effect to fetch data:
  // useEffect(() => {
  //   fetch('/api/patients')
  //     .then(res => res.json())
  //     .then(data => setPatients(data));
  // }, []);

  return (
    <div className="flex min-h-screen bg-gray-50 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col p-4">
        <div className="px-4 mb-8">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-green-700 to-orange-600 bg-clip-text text-transparent">AyurSutra</h1>
        </div>
        <nav className="flex-grow space-y-2">
          <NavLink icon={<LayoutDashboard className="w-5 h-5" />} active>Dashboard</NavLink>
          <NavLink icon={<Hospital className="w-5 h-5" />}>Hospital</NavLink>
          <NavLink icon={<Settings className="w-5 h-5" />}>Settings</NavLink>
          <NavLink icon={<User className="w-5 h-5" />}>Profile</NavLink>
        </nav>
        <div className="mt-8 p-4 bg-teal-50 rounded-2xl text-center">
            <div className="w-10 h-10 bg-teal-500 text-white rounded-full flex items-center justify-center mx-auto -mt-8 mb-2 border-4 border-white">?</div>
            <h4 className="font-semibold text-gray-800">Need help?</h4>
            <p className="text-xs text-gray-600 mt-1 mb-3">Please check our docs</p>
            <button className="w-full bg-teal-500 text-white text-sm font-medium py-2 rounded-lg hover:bg-teal-600 transition-colors">
                DOCUMENTATION
            </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white p-6 flex items-center justify-between">
          <div>
             <h2 className="text-sm text-gray-500">Tables</h2>
             <h1 className="text-2xl font-bold text-gray-800">Patient</h1>
          </div>
          <div className="flex items-center space-x-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Type here..."
                className="bg-gray-100 rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm w-48"
              />
            </div>
            <a href="#" className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-900">
              <User className="w-5 h-5 mr-2" />
              Sign In
            </a>
            <button className="text-gray-500 hover:text-gray-900">
              <Bell className="w-6 h-6" />
            </button>
          </div>
        </header>

        {/* Patient Table */}
        <div className="flex-1 p-6">
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hospital</th>
                  <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Report Status</th>
                  <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type of Therapy</th>
                  <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Therapy Timing</th>
                  <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Session</th>
                  <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {patients.map((patient, index) => (
                  <PatientRow key={index} patient={patient} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Footer */}
        <footer className="p-6 text-right text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} AyurSutra. All Rights Reserved.</p>
        </footer>
      </main>
    </div>
  );
}