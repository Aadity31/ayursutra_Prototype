
// "use client";

// import React from "react";
// import Navbar from "../../components/doctor/Navbar";
// import Sidebar from "../../components/doctor/Sidebar";
// import GraphCard from "../../components/doctor/GraphCard";
// import RecoveryGraph from "../../components/doctor/RecoveryGraph";

// const graphsData = [
//   { title: "Active Patients", value: 120, color: "from-sky-400 to-sky-600", linkTo: "/doctor/patients/active" },
//   { title: "Recovered Patients", value: 85, color: "from-green-400 to-green-600", linkTo: "/doctor/patients/recovered" },
//   { title: "Pending Reports", value: 10, color: "from-red-400 to-red-600" },
// ];

// const GraphsPage: React.FC = () => {
//   const days = ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"];
//   const recoveredPatients = [5, 12, 18, 25, 32, 40, 45];

//   return (
//     <div className="flex min-h-screen bg-sky-50">
//       <Sidebar />
//       <div className="flex-1 flex flex-col">
//         <Navbar />
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
// "use client";

// import React, { useState } from "react";
// import Navbar from "../../components/doctor/Navbar";
// import Sidebar from "../../components/doctor/Sidebar";
// import GraphCard from "../../components/doctor/GraphCard";

// interface Patient {
//   name: string;
//   therapy: string;
//   date: string;
//   time: string;
//   status: "Active" | "Recovered" | "Pending";
// }

// const patients: Patient[] = [
//   { name: "John Doe", therapy: "Physiotherapy", date: "2025-09-25", time: "10:00 AM", status: "Active" },
//   { name: "Jane Smith", therapy: "Hydrotherapy", date: "2025-09-24", time: "11:30 AM", status: "Active" },
//   { name: "Bob Johnson", therapy: "Occupational Therapy", date: "2025-09-23", time: "02:00 PM", status: "Recovered" },
//   // ... add more sample patients
// ];

// const graphsData = [
//   { title: "Active Patients", value: 5, color: "from-sky-400 to-sky-600", status: "Active" },
//   { title: "Recovered Patients", value: 8, color: "from-green-400 to-green-600", status: "Recovered" },
//   { title: "Pending Reports", value: 3, color: "from-red-400 to-red-600", status: "Pending" },
// ];

// const GraphsPage: React.FC = () => {
//   const [selectedStatus, setSelectedStatus] = useState<string | null>(null);

//   const handleCardClick = (status: string) => {
//     setSelectedStatus(status);
//   };

//   const filteredPatients = selectedStatus
//     ? patients.filter((p) => p.status === selectedStatus)
//     : [];

//   return (
//     <div className="flex min-h-screen bg-sky-50">
//       <Sidebar />
//       <div className="flex-1 flex flex-col">
//         <Navbar />
//         <div className="p-6 space-y-6">
//           <h2 className="text-2xl font-bold mb-4 text-sky-700">Doctor Dashboard - Graphs</h2>

//           {/* Graph Cards */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
//             {graphsData.map((graph, idx) => (
//               <GraphCard
//                 key={idx}
//                 {...graph}
//                 className="cursor-pointer"
//                 // on click show patients
//                 icon={
//                   <button
//                     onClick={() => handleCardClick(graph.status)}
//                     className="text-sm bg-white text-black px-2 py-1 rounded hover:bg-gray-200"
//                   >
//                     View {graph.title}
//                   </button>
//                 }
//               />
//             ))}
//           </div>

//           {/* List of Patients */}
//           {selectedStatus && (
//             <div className="bg-white rounded-xl shadow-lg p-6">
//               <h3 className="text-xl font-semibold mb-4 text-sky-600">
//                 {selectedStatus} Patients
//               </h3>
//               <table className="w-full text-left border-collapse">
//                 <thead className="bg-sky-100">
//                   <tr>
//                     <th className="py-2 px-4">Name</th>
//                     <th className="py-2 px-4">Therapy</th>
//                     <th className="py-2 px-4">Date</th>
//                     <th className="py-2 px-4">Time</th>
//                     <th className="py-2 px-4">Report</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {filteredPatients.map((p, idx) => (
//                     <tr key={idx} className="border-b hover:bg-sky-50">
//                       <td className="py-2 px-4">{p.name}</td>
//                       <td className="py-2 px-4">{p.therapy}</td>
//                       <td className="py-2 px-4">{p.date}</td>
//                       <td className="py-2 px-4">{p.time}</td>
//                       <td className="py-2 px-4 text-blue-600 cursor-pointer hover:underline">
//                         View Report
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           )}
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
import RecoveryGraph from "../../components/doctor/RecoveryGraph";

const graphsData = [
  { title: "Active Patients", value: 120, color: "from-blue-600 to-blue-800" },
  { title: "Recovered Patients", value: 85, color: "from-green-600 to-green-800" },
  { title: "Pending Reports", value: 10, color: "from-red-600 to-red-800" },
];

const GraphsPage: React.FC = () => {
  const days = ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"];
  const recoveredPatients = [5, 12, 18, 25, 32, 40, 45];

  return (
    <div className="flex min-h-screen bg-blue-50">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Navbar />

        <div className="p-6 space-y-6">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">
            Doctor Dashboard - Graphs
          </h2>

          {/* Graph Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {graphsData.map((graph, idx) => (
              <GraphCard key={idx} {...graph} className="hover:scale-105" />
            ))}
          </div>

          {/* Recovery Chart */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-green-700">
              Patient Recovery Over Days
            </h3>
            <RecoveryGraph days={days} recoveredPatients={recoveredPatients} />
          </div>

          {/* Active Patients Table */}
          <div className="bg-white shadow-lg rounded-xl p-6 mt-6">
            <h3 className="text-xl font-semibold mb-4 text-blue-700">
              Active Patients
            </h3>
            <table className="w-full text-left border-collapse">
              <thead className="bg-gradient-to-r from-blue-600 to-green-600 text-white">
                <tr>
                  <th className="py-3 px-4">Patient</th>
                  <th className="py-3 px-4">Therapy</th>
                  <th className="py-3 px-4">Date</th>
                  <th className="py-3 px-4">Time</th>
                  <th className="py-3 px-4">Report</th>
                </tr>
              </thead>
              <tbody>
                {["Alice", "Bob", "Charlie"].map((p, i) => (
                  <tr
                    key={i}
                    className="border-b border-gray-200 hover:bg-blue-100 transition-colors"
                  >
                    <td className="py-3 px-4">{p}</td>
                    <td className="py-3 px-4">Physiotherapy</td>
                    <td className="py-3 px-4">26/09/2025</td>
                    <td className="py-3 px-4">10:30 AM</td>
                    <td className="py-3 px-4">
                      <span className="text-green-600 font-medium cursor-pointer hover:underline">
                        View Report
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphsPage;
