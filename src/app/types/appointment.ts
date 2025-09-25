export interface Appointment {
  id: number;
  patient: string;
  date: string;
  time: string;
  status: "Pending" | "Accepted" | "Rejected";
  reason?: string;
}