import React from "react";
import Card from "./Card";
import { Appointment } from "../../types/appointment";

interface Props {
  appointment: Appointment;
  onUpdateStatus: (id: number, status: Appointment["status"]) => void;
}

const statusColors: Record<Appointment["status"], string> = {
  Pending: "bg-yellow-200 text-yellow-800",
  Accepted: "bg-green-200 text-green-800",
  Rejected: "bg-red-200 text-red-800",
};

const AppointmentCard: React.FC<Props> = ({ appointment, onUpdateStatus }) => {
  return (
    <Card title={appointment.patient}>
      <div className="text-gray-600 text-sm mb-2 space-y-1">
        <div><strong>Date:</strong> {appointment.date}</div>
        <div><strong>Time:</strong> {appointment.time}</div>
        <div><strong>Reason:</strong> {appointment.reason || "N/A"}</div>
      </div>

      <div className="flex items-center justify-between mt-2 flex-wrap gap-2">
        <span className={`px-2 py-1 rounded text-sm font-semibold ${statusColors[appointment.status]}`}>
          {appointment.status}
        </span>
        <div className="flex gap-2 flex-wrap">
          <button
            onClick={() => onUpdateStatus(appointment.id, "Accepted")}
            className="px-3 py-1 rounded bg-green-600 text-white text-sm hover:bg-green-700"
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
            Pending
          </button>
        </div>
      </div>
    </Card>
  );
};

export default AppointmentCard;
