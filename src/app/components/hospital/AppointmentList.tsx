import React from "react";
import AppointmentCard from "./AppointmentCard";
import { Appointment } from "../../types/appointment";

interface Props {
  appointments: Appointment[];
  onUpdateStatus: (id: number, status: Appointment["status"]) => void;
}

const AppointmentList: React.FC<Props> = ({ appointments, onUpdateStatus }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {appointments.map(app => (
        <AppointmentCard key={app.id} appointment={app} onUpdateStatus={onUpdateStatus} />
      ))}
    </div>
  );
};

export default AppointmentList;
