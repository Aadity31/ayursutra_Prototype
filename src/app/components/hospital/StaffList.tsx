import React from 'react';
import { FaUserMd } from 'react-icons/fa';

const doctors = [
  { name: 'Dr.Shashi Sharma', status: 'online' },
  { name: 'Dr.Ram Kapoor', status: 'offline' },
  { name: 'Dr.Avinash Mehta', status: 'online' },
  { name: 'Dr.Pradeep Das', status: 'offline' },
];

const StaffList = () => {
  return (
    <div className="text-purple-800 font-semibold">
      <h2 className="text-2xl font-bold mb-4 text-gray-900">Doctor Status</h2>
      <ul className="space-y-3">
        {doctors.map((doc, idx) => (
          <li key={idx} className="flex justify-between items-center border-b pb-2">
            <div className="flex items-center gap-3">
              <FaUserMd className="text-purple-600" />
              <span>{doc.name}</span>
            </div>
            <span className={`text-sm font-medium px-2 py-1 rounded-full ${doc.status === 'online' ? 'bg-green-200 text-green-800' : 'bg-gray-300 text-gray-700'}`}>
              {doc.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StaffList;
