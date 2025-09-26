import React from "react";
import { FiHome, FiUsers, FiBarChart2, FiSettings, FiFileText, FiHelpCircle } from "react-icons/fi";

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-white border-r h-screen sticky top-0 p-6 flex flex-col justify-between">
      <div>
        <div className="text-2xl font-bold text-indigo-600 mb-8">AyuSutra</div>
        <nav className="space-y-4">
          <a href="#" className="flex items-center gap-3 text-gray-700 hover:text-indigo-600">
            <FiHome /> Dashboard
          </a>
          <a href="#" className="flex items-center gap-3 text-gray-700 hover:text-indigo-600">
            <FiUsers /> Hospital
          </a>
          <a href="#" className="flex items-center gap-3 text-gray-700 hover:text-indigo-600">
            <FiBarChart2 /> Analytics
          </a>
          <a href="#" className="flex items-center gap-3 text-gray-700 hover:text-indigo-600">
            <FiSettings /> Settings
          </a>
          <a href="#" className="flex items-center gap-3 text-gray-700 hover:text-indigo-600">
            <FiFileText /> Requests
          </a>
        </nav>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg flex items-center gap-3 text-gray-700">
        <FiHelpCircle /> Need Help?
      </div>
    </aside>
  );
};

export default Sidebar;
