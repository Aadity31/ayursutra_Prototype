import React from 'react';
import { 
  HomeIcon, 
  BuildingOfficeIcon, 
  ChartBarIcon, 
  CogIcon, 
  ReceiptPercentIcon
} from '@heroicons/react/24/outline';

interface MenuItem {
  id: string;
  label: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, setActiveSection }) => {
  const menuItems: MenuItem[] = [
    { id: 'dashboard', label: 'Dashboard', icon: HomeIcon },
    { id: 'hospital', label: 'Hospitals', icon: BuildingOfficeIcon },
    { id: 'analytics', label: 'Progress', icon: ChartBarIcon },
    { id: 'settings', label: 'Settings', icon: CogIcon },
    { id: 'bills', label: 'Bills', icon: ReceiptPercentIcon },
  ];

  return (
    <div className="w-64 bg-white shadow-lg relative min-h-screen">
      {/* Logo */}
      <div className="p-6 border-b">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">A</span>
          </div>
          <div>
            <span className="font-semibold text-gray-800">Ayuu</span>
            <p className="text-xs text-gray-500">Patient Portal</p>
          </div>
        </div>
      </div>

      {/* User Info Card */}
      <div className="p-4 mx-4 mt-4 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg border border-teal-200">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold">R</span>
          </div>
          <div>
            <h4 className="font-medium text-gray-800">Rajesh Kumar</h4>
            <p className="text-xs text-gray-600">Panchkarma Program</p>
            <p className="text-xs text-teal-600">Day 8 of 21</p>
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <nav className="mt-6">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`w-full flex items-center space-x-3 px-6 py-3 text-left hover:bg-gray-50 transition-colors border-r-4 ${
                activeSection === item.id 
                  ? 'border-teal-500 bg-teal-50 text-teal-700' 
                  : 'border-transparent text-gray-600'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Quick Stats */}
      <div className="absolute bottom-24 left-6 right-6">
        <div className="bg-gray-50 rounded-lg p-4">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Quick Stats</h4>
          <div className="space-y-2 text-xs">
            <div className="flex justify-between">
              <span className="text-gray-600">Next Session:</span>
              <span className="font-medium">Tomorrow 10 AM</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Health Score:</span>
              <span className="font-medium text-green-600">85%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Pending Bill:</span>
              <span className="font-medium text-orange-600">₹12,500</span>
            </div>
          </div>
        </div>
      </div>

      {/* Help Section */}
      <div className="absolute bottom-6 left-6 right-6">
        <div className="bg-teal-50 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">?</span>
            </div>
            <span className="font-medium text-gray-800">Need help?</span>
          </div>
          <p className="text-sm text-gray-600 mb-3">Contact support team</p>
          <button className="bg-teal-500 text-white px-4 py-2 rounded text-sm font-medium hover:bg-teal-600 transition-colors w-full">
            CHAT WITH AYUU
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;