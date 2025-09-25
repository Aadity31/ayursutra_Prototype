import React, { useState } from "react";
import AppointmentList from "../components/hospital/AppointmentList";

export default function Appointments() {
  const [appointments, setAppointments] = useState([
    { id: 1, patient: "Upasana Gaur", date: "2025-09-26", time: "10:00", status: "Pending", reason: "Checkup" },
    { id: 2, patient: "Kamakshi Pandey", date: "2025-09-27", time: "11:30", status: "Pending", reason: "Follow-up" }
  ]);

  function updateStatus(id, status) {
    setAppointments(prev => prev.map(a => (a.id === id ? { ...a, status } : a)));
  }

  return (
    <div className="space-y-6 p-4">
      <h2 className="text-2xl font-semibold">Patient Appointments</h2>
      <AppointmentList appointments={appointments} onUpdateStatus={updateStatus} />
    </div>
  );
}
