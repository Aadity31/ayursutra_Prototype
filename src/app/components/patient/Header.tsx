import React, { useState } from 'react';
import { 
  MagnifyingGlassIcon, 
  UserCircleIcon, 
  BellIcon, 
  SunIcon,
  MoonIcon
} from '@heroicons/react/24/outline';

const Header: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isDark, setIsDark] = useState<boolean>(false);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Search query:', searchQuery);
  };

  return (
    <header className="bg-white/80 backdrop-blur-xl shadow-sm border-b border-gray-200/50 px-6 py-4 sticky top-0 z-40">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Dashboard
          </h1>
          <div className="hidden md:flex items-center space-x-2 bg-gradient-to-r from-teal-50 to-cyan-50 px-3 py-1.5 rounded-full border border-teal-200/50">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-teal-700">Live Session</span>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          {/* Enhanced Search */}
          <form onSubmit={handleSearch} className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            <MagnifyingGlassIcon className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-teal-500 transition-colors duration-300" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search appointments, bills..."
              className="pl-12 pr-4 py-3 w-72 bg-white/50 backdrop-blur-xl border border-gray-200/50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500/50 transition-all duration-300 text-gray-700 placeholder-gray-400 hover:bg-white/70"
            />
          </form>

          {/* Theme Toggle */}
          <button 
            onClick={() => setIsDark(!isDark)}
            className="relative p-3 text-gray-600 hover:text-teal-600 bg-white/50 backdrop-blur-xl rounded-2xl hover:bg-white/70 transition-all duration-300 group border border-gray-200/50"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            {isDark ? (
              <SunIcon className="w-5 h-5 relative z-10" />
            ) : (
              <MoonIcon className="w-5 h-5 relative z-10" />
            )}
          </button>

          {/* Enhanced Notifications */}
          <button className="relative p-3 text-gray-600 hover:text-teal-600 bg-white/50 backdrop-blur-xl rounded-2xl hover:bg-white/70 transition-all duration-300 group border border-gray-200/50">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            <BellIcon className="w-5 h-5 relative z-10" />
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white text-xs font-bold">3</span>
            </div>
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full animate-ping opacity-75"></div>
          </button>

          {/* Enhanced User Profile */}
          <button className="flex items-center space-x-3 hover:bg-white/70 px-4 py-3 rounded-2xl transition-all duration-300 group bg-white/50 backdrop-blur-xl border border-gray-200/50">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            <div className="relative">
              <UserCircleIcon className="w-8 h-8 text-gray-600 group-hover:text-teal-600 transition-colors duration-300" />
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
            <div className="text-left relative z-10">
              <span className="text-sm font-semibold text-gray-700 group-hover:text-teal-700 transition-colors duration-300">Rajesh Kumar</span>
              <p className="text-xs text-gray-500">Patient</p>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;