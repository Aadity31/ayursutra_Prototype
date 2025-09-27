"use client";

import React from "react";
import HeaderCards from "../../../components/hospital/HeaderCards";
import HospitalChart from "../../../components/hospital/HospitalChart";
import LineChartPatients from "../../../components/hospital/LineChartPatients";
import PieChartSpecialties from "../../../components/hospital/PieChartSpecialties";
import AppointmentStatusDonut from "../../../components/hospital/AppointmentStatusDonut";
import DoctorAvailabilityBar from "../../../components/hospital/DoctorAvailabilityBar";

import HospitalOverviewChart from "../../../components/hospital/HospitalOverviewChart"; // new
import ActiveUsers from "../../../components/hospital/ActiveUsers"; // new

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
    <div className="min-h-screen bg-gray-50 px-8 py-6 space-y-12">
      {/* Header */}
      <div className="bg-white shadow-sm rounded-lg p-6 border border-gray-200">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
          Hospital Analytics Dashboard
        </h1>
        <p className="text-md text-gray-600 max-w-3xl">
          Overview of hospital operations, staff performance, patient flow, and
          room utilization in a visually structured and interactive dashboard.
        </p>
      </div>

      {/* KPI Cards */}
      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Key Metrics</h2>
        <HeaderCards cards={headerCards} />
      </section>

      {/* Main Charts Section */}
      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Patient & Operations Trends</h2>
        
        {/* First row - 3 charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <HospitalChart />
          <LineChartPatients />
          <AppointmentStatusDonut />
        </div>

        {/* Second row - 2 charts */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <PieChartSpecialties />
          <DoctorAvailabilityBar />
        </div>

        {/* Third row - 2 new charts */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <ActiveUsers />
          <HospitalOverviewChart chart={hospitalOverviewChartProps} />
        </div>
      </section>
    </div>
  );
};

export default AnalyticPage;
