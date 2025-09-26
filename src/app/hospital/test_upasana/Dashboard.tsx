"use client";

import React from "react";
import Sidebar from "../../components/hospital/Sidebar";
import HeaderCards from "../../components/hospital/HeaderCards";
import AddHospitalsCard from "../../components/hospital/AddHospitalsCard";
import BannerCard from "../../components/hospital/BannerCard";
import ActiveUsers from "../../components/hospital/ActiveUsers";
import ReportsTable from "../../components/hospital/ReportsTable";
import FeedbackSection from "../../components/hospital/FeedbackSection";

import HospitalOverviewChart from "../../components/hospital/HospitalOverviewChart";

import { FiUser, FiCalendar, FiUsers, FiCheck } from "react-icons/fi";
import { KPI } from "../../types";

const SmallStatsCard: React.FC = () => {
  // Sample stats
  const stats = [
    { icon: <FiUser className="text-blue-500" />, label: "Active Users", value: 200 },
    { icon: <FiUsers className="text-green-500" />, label: "Total Users", value: 250 },
    { icon: <FiCheck className="text-yellow-500" />, label: "Clicks", value: 1200 },
  ];

  return (
    <div className="bg-white shadow-md rounded-xl p-6 flex flex-col gap-6 w-full max-w-sm">
      {stats.map(({ icon, label, value }, idx) => (
        <div key={idx} className="flex items-center gap-4">
          <div className="text-3xl">{icon}</div>
          <div>
            <p className="text-gray-600 text-sm">{label}</p>
            <p className="font-bold text-black text-xl">{value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const Dashboard: React.FC = () => {
  const headerCards: KPI[] = [
    {
      title: "Today's Appointments",
      value: 25,
      change: "+5%",
      icon: <FiCalendar />,
      status: "up",
    },
    {
      title: "Today's Sessions",
      value: 10,
      change: "-2%",
      icon: <FiCheck />,
      status: "down",
    },
    {
      title: "New Clients",
      value: 8,
      change: "+10%",
      icon: <FiUser />,
      status: "up",
    },
    {
      title: "Total Clients",
      value: 250,
      change: "+1%",
      icon: <FiUsers />,
      status: "up",
    },
  ];

  const chart = {
    title: "Hospital Overview",
  };

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 bg-gray-50 min-h-screen p-6 space-y-8">
        <HeaderCards cards={headerCards} />

        {/* Top section: 3 columns with equal width and spacing */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="w-full">
            <AddHospitalsCard
              text="Add new hospitals."
              link="#"
              image="https://i.pinimg.com/736x/28/2d/88/282d8807bbf1b5d58d452a4a9fb2de83.jpg"
            />
          </div>

          <div className="w-full flex justify-center">
            <BannerCard
              image="/TOP 5 BENEFITS OF A SUBSCRIPTION MODEL & HOW TO UTILIZE.jpeg"
              title="Upgrade Plan"
              description="Get more features by upgrading your subscription."
              
            />
          </div>

          <div className="w-full flex justify-center">
            <SmallStatsCard />
          </div>
        </div>

        {/* Mid section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ActiveUsers />
          <HospitalOverviewChart chart={chart} />
        </div>

        {/* Bottom section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ReportsTable />
          <FeedbackSection />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
