import React from 'react';
import { FaUserMd, FaUserNurse, FaHandsHelping, FaUser } from 'react-icons/fa';

const doctors = [
  { name: 'Dr. Shashi Sharma', status: 'online' },
  { name: 'Dr. Ram Kapoor', status: 'offline' },
  { name: 'Dr. Avinash Mehta', status: 'online' },
  { name: 'Dr. Pradeep Das', status: 'offline' },
];

const therapists = [
  { name: 'Ms. Meena Singh', status: 'online' },
  { name: 'Mr. Ramesh Kumar', status: 'offline' },
  { name: 'Ms. Kavita Joshi', status: 'online' },
  { name: 'Mr. Anil Verma', status: 'offline' },
  { name: 'Ms. Pooja Rao', status: 'online' },
];

const nurses = [
  { name: 'Nurse Anjali Patel', status: 'online' },
  { name: 'Nurse Suresh Verma', status: 'offline' },
];

const supportStaff = [
  { name: 'Mr. Vijay Sharma', status: 'online' },
  { name: 'Ms. Sunita Rao', status: 'offline' },
];

const StaffListSection = ({
  title,
  icon,
  staff,
  textColor,
}: {
  title: string;
  icon: React.ReactNode;
  staff: { name: string; status: string }[];
  textColor: string;
}) => (
  <section className={`p-4 mb-8`}>
    <h3 className={`text-xl font-bold mb-4 flex items-center gap-2 ${textColor}`}>
      {icon} {title}
    </h3>
    <ul className="space-y-3">
      {staff.map((person, idx) => (
        <li
          key={idx}
          className="flex justify-between items-center border-b border-gray-300 pb-2"
        >
          <span className={`${textColor}`}>{person.name}</span>
          <span
            className={`text-sm font-medium px-2 py-1 rounded-full ${
              person.status === 'online' ? 'bg-green-200 text-green-800' : 'bg-gray-300 text-gray-700'
            }`}
          >
            {person.status}
          </span>
        </li>
      ))}
    </ul>
  </section>
);

const StaffList = () => {
  return (
    <div className="font-semibold max-w-4xl mx-auto">
      <h2 className="text-3xl font-extrabold mb-6 text-gray-900">Staff Status</h2>

      <StaffListSection
        title="Doctors"
        icon={<FaUserMd />}
        staff={doctors}
        textColor="text-purple-700"
      />

      <StaffListSection
        title="Therapists"
        icon={<FaHandsHelping />}
        staff={therapists}
        textColor="text-teal-700"
      />

      <StaffListSection
        title="Nurses"
        icon={<FaUserNurse />}
        staff={nurses}
        textColor="text-indigo-700"
      />

      <StaffListSection
        title="Support Staff"
        icon={<FaUser />}
        staff={supportStaff}
        textColor="text-gray-700"
      />
    </div>
  );
};

export default StaffList;
