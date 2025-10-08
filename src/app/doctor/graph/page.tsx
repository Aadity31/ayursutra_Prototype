"use client";

import React from "react";
// import Navbar from "../../components/doctor/Navbar";
// import Sidebar from "../../components/doctor/Sidebar";
// import GraphCard from "../../components/doctor/GraphCard";

const graphsData = [
  { title: "Active Patients", value: 120, color: "from-green-400 to-green-600" },
  { title: "Recovered Patients", value: 85, color: "from-blue-400 to-blue-600" },
  { title: "Pending Reports", value: 10, color: "from-red-400 to-red-600" },
];

const GraphsPage: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      {/* <Sidebar /> */}

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        {/* <Navbar /> */}

        {/* Page Content */}
        <div className="p-6 space-y-6">
          <h2 className="text-2xl font-bold mb-4">Graphs</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* {graphsData.map((graph, idx) => (
              <GraphCard key={idx} {...graph} />
            ))} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphsPage;
