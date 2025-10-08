"use client";

import React from "react";
import HeaderCards from "../../../components/hospital/HeaderCards";
import HospitalChart from "../../../components/hospital/HospitalChart";
import LineChartPatients from "../../../components/hospital/LineChartPatients";
import PieChartSpecialties from "../../../components/hospital/PieChartSpecialties";
import AppointmentStatusDonut from "../../../components/hospital/AppointmentStatusDonut";
import DoctorAvailabilityBar from "../../../components/hospital/DoctorAvailabilityBar";

import HospitalOverviewChart from "../../../components/hospital/HospitalOverviewChart";
import ActiveUsers from "../../../components/hospital/ActiveUsers";

import { FiBarChart2, FiUsers, FiClock, FiCalendar } from "react-icons/fi";
import { KPI } from "../../../types";

const headerCards: KPI[] = [
  {
    title: "Active Staff Today",
    value: 18,
    change: "+5%",
    icon: <FiUsers className="text-blue-500" />,
    status: "up",
  },
  {
    title: "Patient Admissions",
    value: 42,
    change: "+10%",
    icon: <FiCalendar className="text-green-500" />,
    status: "up",
  },
  {
    title: "Available Rooms",
    value: 12,
    change: "-2%",
    icon: <FiBarChart2 className="text-yellow-500" />,
    status: "down",
  },
  {
    title: "Average Waiting Time",
    value: "15 min",
    change: "-5%",
    icon: <FiClock className="text-red-500" />,
    status: "down",
  },
];

const hospitalOverviewChartProps = {
  title: "Hospital Overview",
};

const AnalyticPage: React.FC = () => {
  return (
    <div
      className="
        relative min-h-screen px-8 py-6 space-y-12
        bg-gradient-to-br from-[#E6F4EA] via-[#D9F0E3] to-[#C8E8D1]
      "
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="relative bg-white shadow-sm rounded-lg p-6 border border-gray-200">
        <h1 className="text-4xl font-extrabold text-emerald-800 mb-2">
          Hospital Analytics Dashboard
        </h1>
        <p className="text-md text-emerald-700 max-w-3xl">
          Overview of hospital operations, staff performance, patient flow,
          and room utilization in a visually structured and interactive
          dashboard.
        </p>
      </div>

      <section className="relative">
        <h2 className="text-2xl font-bold text-emerald-800 mb-6">Key Metrics</h2>
        <HeaderCards cards={headerCards} />
      </section>
      <section className="relative">
        <h2 className="text-2xl font-bold text-emerald-800 mb-6">
          Patient & Operations Trends
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <HospitalChart />
          <LineChartPatients />
          <AppointmentStatusDonut />
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <PieChartSpecialties />
          <DoctorAvailabilityBar />
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <ActiveUsers />
          <HospitalOverviewChart chart={hospitalOverviewChartProps} />
        </div>
      </section>
    </div>
  );
};

export default AnalyticPage;
