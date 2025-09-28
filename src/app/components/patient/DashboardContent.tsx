import React, { useState, useEffect } from 'react';
import DashboardCards from './DashboardCards';
import { 
  PlayIcon, 
  ChartBarIcon, 
  SparklesIcon,
  ClockIcon,
  CalendarIcon 
} from '@heroicons/react/24/outline';

const DashboardContent: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(38), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="space-y-8">
      {/* Enhanced Hero Section */}
      <div className="relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-600 via-cyan-600 to-blue-700 rounded-3xl"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/80 via-cyan-500/60 to-blue-600/80 rounded-3xl"></div>

        {/* Floating Particles */}
        <div className="absolute top-10 right-20 w-3 h-3 bg-white/20 rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-20 right-32 w-2 h-2 bg-white/30 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-16 right-16 w-4 h-4 bg-white/15 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>

        {/* Glassmorphism Overlay */}
        <div className="absolute inset-0 backdrop-blur-3xl bg-white/10 rounded-3xl border border-white/20"></div>

        <div className="relative z-10 p-8 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <SparklesIcon className="w-6 h-6 text-teal-300" />
                <span className="text-teal-300 font-medium text-sm uppercase tracking-wide">Wellness Journey</span>
              </div>

              <h1 className="text-4xl font-bold mb-4 leading-tight">
                Your Path to 
                <span className="bg-gradient-to-r from-teal-300 to-cyan-300 bg-clip-text text-transparent"> Wellness</span>
              </h1>

              <p className="text-teal-100 text-lg mb-6 leading-relaxed">
                Currently undergoing Panchkarma therapy at Ayuu Wellness Center, Dehradun.
                <br />
                Your next session is scheduled for tomorrow at 10:00 AM.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group bg-white text-teal-700 px-6 py-3 rounded-2xl font-semibold hover:bg-teal-50 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105">
                  <ChartBarIcon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span>View Progress</span>
                </button>

                <button className="group border-2 border-teal-300/50 px-6 py-3 rounded-2xl font-semibold hover:bg-teal-700/30 transition-all duration-300 flex items-center space-x-2 backdrop-blur-xl hover:border-teal-300 transform hover:scale-105">
                  <CalendarIcon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span>Book Session</span>
                </button>
              </div>
            </div>

            {/* Enhanced Progress Circle */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-48 h-48 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">Day 8</div>
                    <div className="text-teal-200 text-sm mb-4">of 21-day program</div>

                    {/* Animated Progress Ring */}
                    <div className="relative w-24 h-24 mx-auto">
                      <svg className="transform -rotate-90 w-24 h-24">
                        <circle
                          cx="48"
                          cy="48"
                          r="40"
                          stroke="currentColor"
                          strokeWidth="6"
                          fill="transparent"
                          className="text-white/20"
                        />
                        <circle
                          cx="48"
                          cy="48"
                          r="40"
                          stroke="currentColor"
                          strokeWidth="6"
                          fill="transparent"
                          strokeDasharray={`${2 * Math.PI * 40}`}
                          strokeDashoffset={`${2 * Math.PI * 40 * (1 - progress / 100)}`}
                          className="text-white transition-all duration-2000 ease-out"
                          strokeLinecap="round"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-2xl font-bold">{progress}%</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-teal-400 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                  <SparklesIcon className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Dashboard Cards */}
      <DashboardCards />

      {/* Enhanced Quick Status Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            title: 'Current Treatment',
            value: 'Panchkarma',
            subtitle: '21-day detoxification program',
            detail: 'Started: Sept 20, 2025',
            icon: SparklesIcon,
            gradient: 'from-teal-500 to-cyan-600',
            bgPattern: 'from-teal-50 to-cyan-50'
          },
          {
            title: 'Next Session',
            value: 'Tomorrow',
            subtitle: 'Abhyanga Massage',
            detail: '10:00 AM - 11:30 AM',
            icon: ClockIcon,
            gradient: 'from-blue-500 to-indigo-600',
            bgPattern: 'from-blue-50 to-indigo-50'
          },
          {
            title: 'Progress Status',
            value: 'Excellent',
            subtitle: 'All parameters improving',
            detail: 'Last updated: Today',
            icon: ChartBarIcon,
            gradient: 'from-green-500 to-emerald-600',
            bgPattern: 'from-green-50 to-emerald-50'
          }
        ].map((item, index) => (
          <div
            key={index}
            className={`group relative bg-gradient-to-br ${item.bgPattern} rounded-2xl p-6 border border-gray-200/50 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 cursor-pointer`}
            style={{ animationDelay: `${index * 150}ms` }}
          >
            {/* Gradient Border */}
            <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>

            <div className="relative z-10">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-gray-900 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className={`text-2xl font-bold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent mb-2 transition-all duration-300 group-hover:scale-110 origin-left`}>
                    {item.value}
                  </p>
                  <p className="text-gray-600 text-sm font-medium mb-1">{item.subtitle}</p>
                  <p className="text-gray-500 text-xs">{item.detail}</p>
                </div>

                <div className={`w-12 h-12 bg-gradient-to-r ${item.gradient} rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-12`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Interactive Progress Bar */}
              <div className="w-full bg-gray-200/50 rounded-full h-1.5 mb-2 overflow-hidden">
                <div 
                  className={`bg-gradient-to-r ${item.gradient} h-1.5 rounded-full transition-all duration-1000 ease-out`}
                  style={{
                    width: item.title === 'Current Treatment' ? '38%' : 
                           item.title === 'Next Session' ? '100%' : '85%'
                  }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardContent;