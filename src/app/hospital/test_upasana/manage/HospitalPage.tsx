import React from 'react';

import HospitalStats from '../../../components/hospital/HospitalStats';
import RoomDetails from '../../../components/hospital/RoomDetails';
import HospitalFeatures from '../../../components/hospital/HospitalFeatures';
import ExtraFeatures from '../../../components/hospital/ExtraFeatures';
import UpcomingEvents from '../../../components/hospital/UpcomingEventsTimeline';
import StaffList from '../../../components/hospital/StaffList';  // <-- import added

const HospitalPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-8 py-6 space-y-10">
      {/* Ayursutra Header */}
      <div className="bg-white shadow-sm rounded-lg p-6 border border-gray-200">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Kedar Hospital - Ayursutra Network</h1>
        <p className="text-md text-gray-600 max-w-3xl">
          Welcome to the official dashboard of <span className="font-semibold text-purple-700">Ayursutra</span>’s network hospital,
          <span className="font-medium text-gray-800"> Kedar Hospital</span>. This panel provides a real-time overview of hospital
          upcoming events,  staff status, rooms, appointments, patient flow, and other critical insights.
        </p>
      </div>

      {/* Key Hospital Stats */}
      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Today's Snapshot</h2>
        <HospitalStats />
      </section>

      {/* Upcoming Events */}
      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Upcoming Events</h2>
        <UpcomingEvents />
      </section>

      {/* Staff List & Status */}
      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Doctors & Staff Status</h2>
        <StaffList />
      </section>

      {/* Rooms */}
      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Room Occupancy</h2>
        <RoomDetails />
      </section>

      {/* Features */}
      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Services & Facilities</h2>
        <HospitalFeatures />
      </section>

      {/* Extra Details */}
      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Performance & Feedback</h2>
        <ExtraFeatures />
      </section>
    </div>
  );
};

export default HospitalPage;
