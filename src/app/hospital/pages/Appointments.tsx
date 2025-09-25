import React, { useState } from "react";
import AppointmentList from "../../components/hospital/AppointmentList";
import { Appointment } from "../../types/appointment";

const Appointments: React.FC = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([
    { id: 1, patient: "Upasana Gaur", date: "2025-09-26", time: "10:00", status: "Pending", reason: "Checkup" },
    { id: 2, patient: "Kamakshi Pandey", date: "2025-09-27", time: "11:30", status: "Pending", reason: "Follow-up" },
  ]);

  const updateStatus = (id: number, status: Appointment["status"]) => {
    setAppointments(prev => prev.map(a => (a.id === id ? { ...a, status } : a)));
  };

  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-gray-800">Patient Appointments</h2>
      <AppointmentList appointments={appointments} onUpdateStatus={updateStatus} />
    </div>
  );
};

export default Appointments;
