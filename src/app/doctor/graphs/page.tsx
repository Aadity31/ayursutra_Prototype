// "use client";

// import React from "react";
// import Navbar from "../../components/doctor/Navbar";
// import Sidebar from "../../components/doctor/Sidebar";
// import GraphCard from "../../components/doctor/GraphCard";

// const graphsData = [
//   { title: "Active Patients", value: 120, color: "from-green-400 to-green-600" },
//   { title: "Recovered Patients", value: 85, color: "from-blue-400 to-blue-600" },
//   { title: "Pending Reports", value: 10, color: "from-red-400 to-red-600" },
// ];

// const GraphsPage: React.FC = () => {
//   return (
//     <div className="flex min-h-screen bg-gray-50">
//       {/* Sidebar */}
//       <Sidebar />

//       {/* Main content */}
//       <div className="flex-1 flex flex-col">
//         {/* Navbar */}
//         <Navbar />

//         {/* Page Content */}
//         <div className="p-6 space-y-6">
//           <h2 className="text-2xl font-bold mb-4">Graphs</h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {graphsData.map((graph, idx) => (
//               <GraphCard key={idx} {...graph} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GraphsPage;
// "use client";

// import React from "react";
// import Navbar from "../../components/doctor/Navbar";
// import Sidebar from "../../components/doctor/Sidebar";
// import GraphCard from "../../components/doctor/GraphCard";
// import RecoveryGraph from "../../components/doctor/RecoveryGraph"; // import the chart

// const graphsData = [
//   { title: "Active Patients", value: 120, color: "from-sky-400 to-sky-600" },
//   { title: "Recovered Patients", value: 85, color: "from-green-400 to-green-600" },
//   { title: "Pending Reports", value: 10, color: "from-red-400 to-red-600" },
// ];

// const GraphsPage: React.FC = () => {
//   const days = ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"];
//   const recoveredPatients = [5, 12, 18, 25, 32, 40, 45];

//   return (
//     <div className="flex min-h-screen bg-sky-50">
//       {/* Sidebar */}
//       <Sidebar />

//       {/* Main content */}
//       <div className="flex-1 flex flex-col">
//         {/* Navbar */}
//         <Navbar />

//         {/* Page content */}
//         <div className="p-6 space-y-6">
//           <h2 className="text-2xl font-bold mb-4 text-sky-700">Doctor Dashboard - Graphs</h2>

//           {/* Graph Cards */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
//             {graphsData.map((graph, idx) => (
//               <GraphCard key={idx} {...graph} />
//             ))}
//           </div>

//           {/* Recovery Chart */}
//           <div className="bg-white rounded-xl shadow-lg p-6">
//             <h3 className="text-xl font-semibold mb-4 text-sky-600">Patient Recovery Over Days</h3>
//             <RecoveryGraph days={days} recoveredPatients={recoveredPatients} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GraphsPage;
"use client";

import React from "react";
import Navbar from "../../components/doctor/Navbar";
import Sidebar from "../../components/doctor/Sidebar";
import GraphCard from "../../components/doctor/GraphCard";
import RecoveryGraph from "../../components/doctor/RecoveryGraph"; // Chart component

const graphsData = [
  { title: "Active Patients", value: 120, color: "from-sky-400 to-sky-600" },
  { title: "Recovered Patients", value: 85, color: "from-green-400 to-green-600" },
  { title: "Pending Reports", value: 10, color: "from-red-400 to-red-600" },
];

const GraphsPage: React.FC = () => {
  const days = ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"];
  const recoveredPatients = [5, 12, 18, 25, 32, 40, 45];

  return (
    <div className="flex min-h-screen bg-gradient-to-b from-sky-100 to-sky-200">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <Navbar />

        {/* Page content */}
        <div className="p-6 space-y-8">
          <h2 className="text-3xl font-bold text-sky-800">Doctor Dashboard - Graphs</h2>

          {/* Graph Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {graphsData.map((graph, idx) => (
              <GraphCard key={idx} {...graph} />
            ))}
          </div>

          {/* Recovery Chart */}
          <div className="bg-white rounded-2xl shadow-xl p-6 mt-6">
            <h3 className="text-xl font-semibold mb-4 text-sky-700">
              Patient Recovery Over Days
            </h3>
            <RecoveryGraph days={days} recoveredPatients={recoveredPatients} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphsPage;
