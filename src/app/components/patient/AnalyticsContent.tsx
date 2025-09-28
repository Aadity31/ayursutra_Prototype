import React from 'react';

const AnalyticsContent: React.FC = () => (
  <div>
    <h2 className="text-2xl font-bold mb-6 text-gray-800">Therapy Progress Analytics</h2>

    {/* Progress Overview Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-6">
      <div className="bg-white rounded-lg p-6 shadow-sm border">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-2">Treatment Days</h3>
            <p className="text-3xl font-bold text-teal-600">8 / 21</p>
            <p className="text-sm text-green-600">38% Complete</p>
          </div>
          <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center">
            <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-sm border">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-2">Sessions Completed</h3>
            <p className="text-3xl font-bold text-blue-600">12</p>
            <p className="text-sm text-blue-600">Various therapies</p>
          </div>
          <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-sm border">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-2">Health Score</h3>
            <p className="text-3xl font-bold text-green-600">85%</p>
            <p className="text-sm text-green-600">↑ Improved by 25%</p>
          </div>
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-sm border">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-2">Next Milestone</h3>
            <p className="text-3xl font-bold text-purple-600">3</p>
            <p className="text-sm text-purple-600">Days remaining</p>
          </div>
          <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center">
            <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
      </div>
    </div>

    {/* Panchkarma Therapy Progress Charts */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
      <div className="bg-white rounded-lg p-6 shadow-sm border">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">Panchkarma Treatment Progress</h3>
        <div className="space-y-4">
          {[
            { therapy: 'Abhyanga (Oil Massage)', sessions: 8, total: 21, progress: 38 },
            { therapy: 'Swedana (Steam Bath)', sessions: 6, total: 15, progress: 40 },
            { therapy: 'Virechana (Purgation)', sessions: 2, total: 3, progress: 67 },
            { therapy: 'Basti (Enema)', sessions: 1, total: 5, progress: 20 },
            { therapy: 'Nasya (Nasal Drops)', sessions: 3, total: 7, progress: 43 }
          ].map((item, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex-1">
                <h4 className="font-medium text-gray-800">{item.therapy}</h4>
                <p className="text-sm text-gray-600">{item.sessions}/{item.total} sessions</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-24 bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-teal-500 h-2 rounded-full transition-all duration-300" 
                    style={{width: `${item.progress}%`}}
                  ></div>
                </div>
                <span className="text-sm font-medium text-gray-700 w-12">{item.progress}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-sm border">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">Health Parameters Improvement</h3>
        <div className="space-y-4">
          {[
            { parameter: 'Energy Level', before: 60, current: 85, improvement: '+25' },
            { parameter: 'Sleep Quality', before: 55, current: 80, improvement: '+25' },
            { parameter: 'Digestion', before: 40, current: 75, improvement: '+35' },
            { parameter: 'Stress Level', before: 80, current: 45, improvement: '-35' },
            { parameter: 'Joint Flexibility', before: 50, current: 70, improvement: '+20' },
            { parameter: 'Mental Clarity', before: 65, current: 90, improvement: '+25' }
          ].map((item, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex-1">
                <h4 className="font-medium text-gray-800">{item.parameter}</h4>
                <p className="text-sm text-gray-600">Before: {item.before}% → Now: {item.current}%</p>
              </div>
              <div className="flex items-center space-x-2">
                <span className={`text-sm font-medium px-2 py-1 rounded ${
                  item.improvement.startsWith('+') ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                }`}>
                  {item.improvement}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Weekly Progress Chart Placeholder */}
    <div className="bg-white rounded-lg p-6 shadow-sm border">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">Weekly Progress Chart</h3>
      <div className="h-64 flex items-center justify-center bg-gradient-to-br from-teal-50 to-cyan-50 rounded-lg border-2 border-dashed border-teal-200">
        <div className="text-center">
          <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <p className="text-gray-600 font-medium">Interactive Progress Chart</p>
          <p className="text-sm text-gray-500">Visual representation of your Panchkarma journey</p>
        </div>
      </div>
    </div>
  </div>
);

export default AnalyticsContent;