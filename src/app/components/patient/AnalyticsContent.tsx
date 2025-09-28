import React, { useState, useEffect } from 'react';
import { 
  SparklesIcon,
  TrophyIcon,
  FireIcon,
  HeartIcon,
  ChartBarIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

const AnalyticsContent: React.FC = () => {
  const [animateProgress, setAnimateProgress] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimateProgress(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="space-y-8">
      {/* Enhanced Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-2">
            Therapy Progress Analytics
          </h2>
          <p className="text-gray-600">Track your Panchkarma journey and health improvements</p>
        </div>
        <div className="flex items-center space-x-2 bg-gradient-to-r from-green-50 to-emerald-50 px-4 py-2 rounded-2xl border border-green-200/50">
          <TrophyIcon className="w-5 h-5 text-green-600" />
          <span className="text-green-700 font-medium">Excellent Progress</span>
        </div>
      </div>

      {/* Enhanced Progress Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {[
          {
            title: 'Treatment Days',
            value: '8 / 21',
            subtitle: '38% Complete',
            gradient: 'from-teal-500 to-cyan-600',
            bgGradient: 'from-teal-50 to-cyan-50',
            icon: ClockIcon,
            progress: 38
          },
          {
            title: 'Sessions Completed', 
            value: '12',
            subtitle: 'Various therapies',
            gradient: 'from-blue-500 to-indigo-600',
            bgGradient: 'from-blue-50 to-indigo-50',
            icon: SparklesIcon,
            progress: 75
          },
          {
            title: 'Health Score',
            value: '85%',
            subtitle: '↑ Improved by 25%',
            gradient: 'from-green-500 to-emerald-600',
            bgGradient: 'from-green-50 to-emerald-50',
            icon: HeartIcon,
            progress: 85
          },
          {
            title: 'Next Milestone',
            value: '3',
            subtitle: 'Days remaining',
            gradient: 'from-purple-500 to-pink-600',
            bgGradient: 'from-purple-50 to-pink-50',
            icon: TrophyIcon,
            progress: 60
          }
        ].map((card, index) => (
          <div
            key={index}
            className={`group relative bg-gradient-to-br ${card.bgGradient} rounded-2xl p-6 border border-gray-200/50 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 cursor-pointer`}
            style={{ animationDelay: `${index * 150}ms` }}
          >
            {/* Gradient Border Effect */}
            <div className={`absolute inset-0 bg-gradient-to-r ${card.gradient} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>

            <div className="relative z-10">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-sm font-medium text-gray-600 mb-2">{card.title}</h3>
                  <p className={`text-3xl font-bold bg-gradient-to-r ${card.gradient} bg-clip-text text-transparent mb-1 transition-transform duration-300 group-hover:scale-110 origin-left`}>
                    {card.value}
                  </p>
                  <p className="text-gray-600 text-sm">{card.subtitle}</p>
                </div>

                <div className={`w-14 h-14 bg-gradient-to-r ${card.gradient} rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-12`}>
                  <card.icon className="w-7 h-7 text-white" />
                </div>
              </div>

              {/* Animated Progress Ring */}
              <div className="relative w-16 h-16 mx-auto mt-4">
                <svg className="transform -rotate-90 w-16 h-16">
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="transparent"
                    className="text-gray-200"
                  />
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="transparent"
                    strokeDasharray={`${2 * Math.PI * 28}`}
                    strokeDashoffset={animateProgress ? `${2 * Math.PI * 28 * (1 - card.progress / 100)}` : `${2 * Math.PI * 28}`}
                    className={`bg-gradient-to-r ${card.gradient} bg-clip-text text-transparent transition-all duration-2000 ease-out`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-bold text-gray-700">{card.progress}%</span>
                </div>
              </div>
            </div>

            {/* Shine Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out rounded-2xl"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Enhanced Therapy Progress Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Panchkarma Treatment Progress */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-gray-200/50">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center">
              <SparklesIcon className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800">Panchkarma Treatment Progress</h3>
          </div>

          <div className="space-y-6">
            {[
              { therapy: 'Abhyanga (Oil Massage)', sessions: 8, total: 21, progress: 38, color: 'from-teal-500 to-cyan-500' },
              { therapy: 'Swedana (Steam Bath)', sessions: 6, total: 15, progress: 40, color: 'from-blue-500 to-indigo-500' },
              { therapy: 'Virechana (Purgation)', sessions: 2, total: 3, progress: 67, color: 'from-green-500 to-emerald-500' },
              { therapy: 'Basti (Enema)', sessions: 1, total: 5, progress: 20, color: 'from-orange-500 to-red-500' },
              { therapy: 'Nasya (Nasal Drops)', sessions: 3, total: 7, progress: 43, color: 'from-purple-500 to-pink-500' }
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-gradient-to-r from-gray-50 to-white rounded-2xl p-4 hover:shadow-lg transition-all duration-300 border border-gray-100"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                      {item.therapy}
                    </h4>
                    <p className="text-sm text-gray-600">{item.sessions}/{item.total} sessions completed</p>
                  </div>
                  <div className="text-right">
                    <span className={`text-lg font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                      {item.progress}%
                    </span>
                  </div>
                </div>

                <div className="relative">
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div 
                      className={`bg-gradient-to-r ${item.color} h-3 rounded-full transition-all duration-1000 ease-out shadow-lg`}
                      style={{
                        width: animateProgress ? `${item.progress}%` : '0%',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                      }}
                    ></div>
                  </div>
                  <div className={`absolute top-0 h-3 bg-gradient-to-r ${item.color} rounded-full opacity-50 animate-pulse`}
                       style={{width: animateProgress ? `${Math.min(item.progress + 10, 100)}%` : '0%'}}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Health Parameters Improvement */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-gray-200/50">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center">
              <HeartIcon className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800">Health Parameters Improvement</h3>
          </div>

          <div className="space-y-6">
            {[
              { parameter: 'Energy Level', before: 60, current: 85, improvement: '+25', color: 'from-yellow-500 to-orange-500' },
              { parameter: 'Sleep Quality', before: 55, current: 80, improvement: '+25', color: 'from-indigo-500 to-purple-500' },
              { parameter: 'Digestion', before: 40, current: 75, improvement: '+35', color: 'from-green-500 to-teal-500' },
              { parameter: 'Stress Level', before: 80, current: 45, improvement: '-35', color: 'from-blue-500 to-cyan-500' },
              { parameter: 'Joint Flexibility', before: 50, current: 70, improvement: '+20', color: 'from-pink-500 to-rose-500' },
              { parameter: 'Mental Clarity', before: 65, current: 90, improvement: '+25', color: 'from-violet-500 to-purple-500' }
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-gradient-to-r from-gray-50 to-white rounded-2xl p-4 hover:shadow-lg transition-all duration-300 border border-gray-100"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                      {item.parameter}
                    </h4>
                    <p className="text-sm text-gray-600">
                      Before: {item.before}% → Now: <span className="font-semibold text-gray-800">{item.current}%</span>
                    </p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className={`px-3 py-1 rounded-full text-sm font-bold ${
                      item.improvement.startsWith('+') 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-blue-100 text-blue-700'
                    }`}>
                      {item.improvement}%
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="flex-1 flex items-center space-x-2">
                    <span className="text-xs text-gray-500 w-8">Before</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gray-400 h-2 rounded-full transition-all duration-1000"
                        style={{width: animateProgress ? `${item.before}%` : '0%'}}
                      ></div>
                    </div>
                  </div>
                  <div className="flex-1 flex items-center space-x-2">
                    <span className="text-xs text-gray-500 w-6">Now</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div 
                        className={`bg-gradient-to-r ${item.color} h-2 rounded-full transition-all duration-1000 shadow-lg`}
                        style={{width: animateProgress ? `${item.current}%` : '0%'}}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Weekly Progress Chart */}
      <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-gray-200/50">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center">
              <ChartBarIcon className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800">Weekly Progress Visualization</h3>
              <p className="text-sm text-gray-600">Interactive chart showing your wellness journey</p>
            </div>
          </div>
          <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-xl font-medium hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
            View Full Report
          </button>
        </div>

        <div className="h-80 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-2xl border-2 border-dashed border-indigo-200 flex items-center justify-center relative overflow-hidden">
          {/* Animated Background Pattern */}
          <div className="absolute inset-0">
            {Array.from({length: 20}).map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-indigo-200 rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`
                }}
              ></div>
            ))}
          </div>

          <div className="text-center relative z-10">
            <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl animate-bounce">
              <ChartBarIcon className="w-10 h-10 text-white" />
            </div>
            <h4 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
              Interactive Progress Chart
            </h4>
            <p className="text-gray-600 mb-4">Visual representation of your complete Panchkarma journey</p>
            <div className="flex items-center justify-center space-x-4 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                <span className="text-gray-600">Treatment Progress</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-600">Health Improvement</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span className="text-gray-600">Wellness Score</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsContent;