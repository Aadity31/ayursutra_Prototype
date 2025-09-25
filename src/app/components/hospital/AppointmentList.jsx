import React from "react";
import AppointmentCard from "./AppointmentCard";

export default function AppointmentList({ appointments, onUpdateStatus }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {appointments.map(app => (
        <AppointmentCard
          key={app.id}
          appointment={app}
          onUpdateStatus={onUpdateStatus}
        />
      ))}
    </div>
  );
}
