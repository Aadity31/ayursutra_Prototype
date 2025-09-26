"use client";

import React from "react";
import Sidebar from "../../components/hospital/Sidebar";
import HeaderCards from "../../components/hospital/HeaderCards";
import AddHospitalsCard from "../../components/hospital/AddHospitalsCard";
import BannerCard from "../../components/hospital/BannerCard";
import ActiveUsers from "../../components/hospital/ActiveUsers";
import ReportsTable from "../../components/hospital/ReportsTable";
import FeedbackSection from "../../components/hospital/FeedbackSection";

import HospitalOverviewChart from "../../components/hospital/HospitalOverviewChart"; // assuming same folder or adjust path

import { FiUser, FiCalendar, FiUsers, FiCheck } from "react-icons/fi";
import { KPI } from "../../types";

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
      <main className="flex-1 bg-gray-50 min-h-screen p-6 space-y-6">
        <HeaderCards cards={headerCards} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <AddHospitalsCard
            text="Add new hospitals."
            link="#"
            image="https://i.pinimg.com/736x/28/2d/88/282d8807bbf1b5d58d452a4a9fb2de83.jpg"
          />
          
          <BannerCard
            image="/TOP 5 BENEFITS OF A SUBSCRIPTION MODEL & HOW TO UTILIZE.jpeg"
            title="Upgrade Plan"
            description="Get more features by upgrading your subscription."
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ActiveUsers />
          <HospitalOverviewChart chart={chart} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ReportsTable />
          <FeedbackSection />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
