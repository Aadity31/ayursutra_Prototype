import React from 'react';

import HospitalStats from '../../../components/hospital/HospitalStats';
import RoomDetails from '../../../components/hospital/RoomDetails';
import HospitalFeatures from '../../../components/hospital/HospitalFeatures';
import ExtraFeatures from '../../../components/hospital/ExtraFeatures';
import UpcomingEvents from '../../../components/hospital/UpcomingEventsTimeline';
import StaffList from '../../../components/hospital/StaffList';

const HospitalPage = () => {
  return (
    <div
      className="min-h-screen px-8 py-6 space-y-10"
      style={{
        background:
          'linear-gradient(to right, #FFE4B5 0%, #FFE4B5 40%, #D7F4D1 60%, #D7F4D1 100%)',
      }}
    >
      <div className="bg-white shadow-sm rounded-lg p-6 border border-gray-200">
        <h1 className="text-4xl font-extrabold text-orange-600 mb-2">
          Kedar Hospital - Ayursutra Network
        </h1>
        <p className="text-md text-emerald-700 max-w-3xl">
          Welcome to the official dashboard of{' '}
          <span className="font-semibold text-green-700">Ayursutra</span>’s network hospital,
          <span className="font-medium text-emerald-800"> Kedar Hospital</span>. This panel provides a
          real-time overview of hospital upcoming events, staff status, rooms, appointments,
          patient flow, and other critical insights.
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-emerald-800 mb-4">Today's Snapshot</h2>
        <HospitalStats />
      </section>

      <section>
        <h2 className="text-2xl font-bold text-emerald-800 mb-4">Upcoming Events</h2>
        <UpcomingEvents />
      </section>

      <section>
        <h2 className="text-2xl font-bold text-emerald-800 mb-4">Doctors & Staff Status</h2>
        <StaffList />
      </section>

      <section>
        <h2 className="text-2xl font-bold text-emerald-800 mb-4">Room Occupancy</h2>
        <RoomDetails />
      </section>

      <section>
        <h2 className="text-2xl font-bold text-emerald-800 mb-4">Key Services & Facilities</h2>
        <HospitalFeatures />
      </section>

      <section>
        <h2 className="text-2xl font-bold text-emerald-800 mb-4">Performance & Feedback</h2>
        <ExtraFeatures />
      </section>
    </div>
  );
};

export default HospitalPage;
