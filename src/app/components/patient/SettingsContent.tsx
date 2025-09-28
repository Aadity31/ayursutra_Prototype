import React from 'react';

const SettingsContent: React.FC = () => (
  <div>
    <h2 className="text-2xl font-bold mb-6 text-gray-800">Profile Settings</h2>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Personal Information */}
      <div className="bg-white rounded-lg p-6 shadow-sm border">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">Personal Information</h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center">
              <span className="text-3xl font-bold text-teal-600">R</span>
            </div>
            <div>
              <h4 className="font-medium text-gray-800">Rajesh Kumar</h4>
              <p className="text-sm text-gray-600">Patient ID: AYU2025001</p>
              <p className="text-xs text-gray-500">Member since Sept 2025</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
              <input 
                type="text" 
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500" 
                defaultValue="Rajesh"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
              <input 
                type="text" 
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500" 
                defaultValue="Kumar"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input 
              type="email" 
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500" 
              defaultValue="rajesh.kumar@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
            <input 
              type="tel" 
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500" 
              defaultValue="+91 98765 43210"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth</label>
            <input 
              type="date" 
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500" 
              defaultValue="1985-07-15"
            />
          </div>

          <button className="bg-teal-500 text-white px-6 py-2 rounded-lg hover:bg-teal-600 transition-colors w-full">
            Update Profile
          </button>
        </div>
      </div>

      {/* Medical Information & Preferences */}
      <div className="space-y-6">
        <div className="bg-white rounded-lg p-6 shadow-sm border">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Medical Information</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Current Treatment</label>
              <input 
                type="text" 
                className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-gray-50" 
                value="Panchkarma Detox Program"
                readOnly
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Primary Health Concerns</label>
              <textarea 
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500" 
                rows={3}
                defaultValue="Digestive issues, stress management, joint pain"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Allergies</label>
              <input 
                type="text" 
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500" 
                placeholder="List any allergies"
                defaultValue="None"
              />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Preferences</h3>
          <div className="space-y-3">
            <label className="flex items-center justify-between">
              <span className="text-gray-700">SMS appointment reminders</span>
              <input type="checkbox" className="w-4 h-4 text-teal-500 rounded" defaultChecked />
            </label>
            <label className="flex items-center justify-between">
              <span className="text-gray-700">Email health reports</span>
              <input type="checkbox" className="w-4 h-4 text-teal-500 rounded" defaultChecked />
            </label>
            <label className="flex items-center justify-between">
              <span className="text-gray-700">Treatment progress updates</span>
              <input type="checkbox" className="w-4 h-4 text-teal-500 rounded" defaultChecked />
            </label>
            <label className="flex items-center justify-between">
              <span className="text-gray-700">Wellness tips & articles</span>
              <input type="checkbox" className="w-4 h-4 text-teal-500 rounded" />
            </label>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Emergency Contact</h3>
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Contact Name</label>
              <input 
                type="text" 
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500" 
                defaultValue="Priya Kumar (Spouse)"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
              <input 
                type="tel" 
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500" 
                defaultValue="+91 98765 43211"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default SettingsContent;