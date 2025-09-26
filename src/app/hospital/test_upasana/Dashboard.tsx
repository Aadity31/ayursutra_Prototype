
import React from "react";
import Sidebar from "../../components/hospital/Sidebar";
import HeaderCards from "../../components/hospital/HeaderCards";
import AddHospitalsCard from "../../components/hospital/AddHospitalsCard";
import BannerCard from "../../components/hospital/BannerCard";
import ActiveUsers from "../../components/hospital/ActiveUsers";
import HospitalOverviewChart from "../../components/hospital/HospitalOverviewChart";
import ReportsTable from "../../components/hospital/ReportsTable";
import FeedbackSection from "../../components/hospital/FeedbackSection";

import { FiUser, FiCalendar, FiUsers, FiCheck } from "react-icons/fi";
import { KPI, ChartData, Report, Feedback } from "../../types";

const Dashboard: React.FC = () => {
  const headerCards: KPI[] = [
    { title: "Today's Appointments", value: 25, change: "+5%", icon: <FiCalendar />, status: "up" },
    { title: "Today's Sessions", value: 10, change: "-2%", icon: <FiCheck />, status: "down" },
    { title: "New Clients", value: 8, change: "+10%", icon: <FiUser />, status: "up" },
    { title: "Total Clients", value: 250, change: "+1%", icon: <FiUsers />, status: "up" },
  ];

  const chart: ChartData = { title: "Hospital Overview", dateRange: "Jan - Mar 2025", dataPoints: [] };

  const reports: Report[] = [
    { hospital: "City Hospital", patients: 120, duration: "3 months" },
    { hospital: "Green Valley", patients: 85, duration: "2 months" },
  ];

  const feedbacks: Feedback[] = [
    { hospital: "Sunrise Clinic", date: "Feb 2025", completion: 80 },
    { hospital: "Wellness Center", date: "Mar 2025", completion: 60 },
  ];

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 bg-gray-50 min-h-screen p-6 space-y-6">
        <HeaderCards cards={headerCards} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <AddHospitalsCard text="Add new hospitals and manage existing ones." link="#" />
          <div className="bg-white shadow-md rounded-xl p-6 flex items-center justify-center">
            <p className="text-gray-400">[Custom Card Placeholder]</p>
          </div>
          <BannerCard
            image="https://via.placeholder.com/300x120"
            title="Upgrade Plan"
            description="Get more features by upgrading your subscription."
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ActiveUsers users={200} clicks={1200} sales={320} items={50} />
          <HospitalOverviewChart chart={chart} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ReportsTable reports={reports} />
          <FeedbackSection feedbacks={feedbacks} />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
