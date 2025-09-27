"use client";

import React from "react";

const events = [
  { time: "9:00 AM", event: "Doctor Shift Start - Dr. Smriti Sharma" },
  { time: "11:30 AM", event: "Therapist Meeting" },
  { time: "2:00 PM", event: "Shirodhara Session" },
  { time: "4:00 PM", event: "Patient Feedback Review" },
];

const UpcomingEventsTimeline: React.FC = () => (
  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 max-h-[300px] overflow-auto">
    <h3 className="text-lg font-semibold mb-4 text-gray-900">Upcoming Events</h3>
    <ul className="space-y-3">
      {events.map(({ time, event }, idx) => (
        <li key={idx} className="flex items-center gap-4 text-gray-700">
          <span className="font-mono text-sm text-indigo-600">{time}</span>
          <span>{event}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default UpcomingEventsTimeline;
