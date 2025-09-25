import React from "react";
import { Appointment } from "../../pages/Appointments";

interface AppointmentListProps {
  appointments: Appointment[];
  onUpdateStatus: (id: number, status: Appointment["status"]) => void;
}

const AppointmentList: React.FC<AppointmentListProps> = ({ appointments, onUpdateStatus }) => {
  return (
    <div className="space-y-4">
      {appointments.map(a => (
        <div key={a.id} className="border p-4 rounded shadow">
          <h3 className="font-semibold">{a.patient}</h3>
          <p>{a.date} at {a.time}</p>
          <p>Reason: {a.reason}</p>
          <p>Status: {a.status}</p>
          <div className="space-x-2 mt-2">
            <button className="px-3 py-1 bg-green-500 text-white rounded" onClick={() => onUpdateStatus(a.id, "Accepted")}>Accept</button>
            <button className="px-3 py-1 bg-red-500 text-white rounded" onClick={() => onUpdateStatus(a.id, "Rejected")}>Reject</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AppointmentList;
