import React from 'react';
import DashboardCards from './DashboardCards';

const DashboardContent: React.FC = () => (
  <div>
    {/* Hero Section - Current Treatment Status */}
    <div className="bg-gradient-to-r from-teal-600 to-cyan-600 rounded-xl p-8 mb-6 text-white relative overflow-hidden">
      <div className="relative z-10">
        <h1 className="text-2xl font-bold mb-2">Your Wellness Journey</h1>
        <p className="text-teal-100 mb-4">
          Currently undergoing Panchkarma therapy at Ayuu Wellness Center, Dehradun.<br />
          Your next session is scheduled for tomorrow at 10:00 AM.
        </p>
        <div className="flex space-x-4">
          <button className="bg-white text-teal-700 px-6 py-2 rounded-lg font-medium hover:bg-teal-50 transition-colors">
            View Progress
          </button>
          <button className="border border-teal-300 px-6 py-2 rounded-lg font-medium hover:bg-teal-700 transition-colors">
            Book Session
          </button>
        </div>
      </div>
      {/* Treatment progress indicator */}
      <div className="absolute right-8 top-8 text-right">
        <div className="text-3xl font-bold">Day 8</div>
        <div className="text-teal-200 text-sm">of 21-day program</div>
        <div className="w-32 bg-teal-700 rounded-full h-2 mt-2">
          <div className="bg-white h-2 rounded-full" style={{width: '38%'}}></div>
        </div>
      </div>
    </div>

    {/* Dashboard Cards */}
    <DashboardCards />

    {/* Quick Status Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
      <div className="bg-white rounded-lg p-6 shadow-sm border">
        <h3 className="text-lg font-semibold mb-2 text-gray-800">Current Treatment</h3>
        <p className="text-2xl font-bold text-teal-600 mb-2">Panchkarma</p>
        <p className="text-sm text-gray-600">21-day detoxification program</p>
        <p className="text-xs text-gray-500 mt-2">Started: Sept 20, 2025</p>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-sm border">
        <h3 className="text-lg font-semibold mb-2 text-gray-800">Next Session</h3>
        <p className="text-2xl font-bold text-blue-600 mb-2">Tomorrow</p>
        <p className="text-sm text-gray-600">Abhyanga Massage</p>
        <p className="text-xs text-gray-500 mt-2">10:00 AM - 11:30 AM</p>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-sm border">
        <h3 className="text-lg font-semibold mb-2 text-gray-800">Progress</h3>
        <p className="text-2xl font-bold text-green-600 mb-2">Excellent</p>
        <p className="text-sm text-gray-600">All parameters improving</p>
        <p className="text-xs text-gray-500 mt-2">Last updated: Today</p>
      </div>
    </div>
  </div>
);

export default DashboardContent;