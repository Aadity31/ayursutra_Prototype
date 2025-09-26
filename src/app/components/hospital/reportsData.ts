// src/hospital/reportsData.ts

import { FiActivity, FiDatabase, FiHeart } from "react-icons/fi";
import { IconType } from "react-icons";

interface ReportWithIcon {
  hospital: string;
  patients: number;
  duration: string;
  icon: IconType;
  color: string;
}

export const reportsData: ReportWithIcon[] = [
  {
    hospital: "Max Super Speciality Hospital",
    patients: 14000,
    duration: "1 Month",
    icon: FiActivity,
    color: "#4F46E5", // Indigo
  },
  {
    hospital: "Apollo Hospital",
    patients: 1000,
    duration: "1 Week",
    icon: FiDatabase,
    color: "#059669", // Emerald
  },
  {
    hospital: "Fortis Healthcare",
    patients: 700,
    duration: "1 Day",
    icon: FiHeart,
    color: "#EF4444", // Red
  },
  {
    hospital: "City Care Hospital",
    patients: 1687,
    duration: "1 Month",
    icon: FiActivity,
    color: "#4F46E5",
  },
  {
    hospital: "Green Valley Hospital",
    patients: 587,
    duration: "1 Month",
    icon: FiDatabase,
    color: "#059669",
  },
];
