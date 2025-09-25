import React from "react";
import Card from "./Card";

export default function AppointmentCard({ appointment, onUpdateStatus }) {
  return (
    <Card title={`${appointment.patient} — ${appointment.status}`}>
      <div className="text-sm text-gray-600 mb-2">
        <div>Date: {appointment.date}</div>
        <div>Time: {appointment.time}</div>
        <div>Reason: {appointment.reason || "N/A"}</div>
      </div>

      <div className="flex gap-2 flex-wrap">
        <button
          onClick={() => onUpdateStatus(appointment.id, "Accepted")}
          className="px-3 py-1 rounded bg-emerald-600 text-white text-sm hover:bg-emerald-700"
        >
          Accept
        </button>
        <button
          onClick={() => onUpdateStatus(appointment.id, "Rejected")}
          className="px-3 py-1 rounded bg-red-500 text-white text-sm hover:bg-red-600"
        >
          Reject
        </button>
        <button
          onClick={() => onUpdateStatus(appointment.id, "Pending")}
          className="px-3 py-1 rounded bg-gray-200 text-sm hover:bg-gray-300"
        >
          Mark Pending
        </button>
      </div>
    </Card>
  );
}
