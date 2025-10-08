<<<<<<< HEAD

"use client";

import Dashboard from "./Dashboard"; 
export default function TestUpasanaDashboardPage() {
  return <Dashboard />;
}
=======
// // "use client";

// // import React from "react";
// // import Navbar from "../../components/doctor/Navbar";
// // import Sidebar from "../../components/doctor/Sidebar";

// // interface Doctor {
// //   name: string;
// //   email: string;
// //   status: "Available" | "Not Available";
// //   time: string;
// //   date: string;
// // }

// // const doctors: Doctor[] = [
// //   { name: "doc 1", email: "esthera@simmmpile.com", status: "Available", time: "11:25 AM", date: "14/06" },
// //   { name: "doc 2", email: "alexa@simmmpile.com", status: "Not Available", time: "11:25 AM", date: "14/06" },
// //   { name: "doc 3", email: "laurent@simmmpile.com", status: "Available", time: "11:25 AM", date: "14/06" },
// //   { name: "doc 4", email: "fred@simmmpile.com", status: "Not Available", time: "11:25 AM", date: "14/06" },
// //   { name: "doc 5", email: "daniel@simmmpile.com", status: "Available", time: "11:25 AM", date: "14/06" },
// //   { name: "doc 6", email: "mark@simmmpile.com", status: "Not Available", time: "11:25 AM", date: "14/06" },
// // ];

// // const DashboardPage: React.FC = () => {
// //   return (
// //     <div className="flex min-h-screen bg-gray-50">
// //       <Sidebar />
// //       <div className="flex-1 flex flex-col">
// //         <Navbar />
// //         <div className="p-6">
// //           <h2 className="text-2xl font-semibold mb-6">Patient</h2>
// //           <div className="bg-white shadow-md rounded-lg overflow-hidden">
// //             <table className="w-full text-left border-collapse">
// //               <thead className="bg-gray-100">
// //                 <tr>
// //                   <th className="py-3 px-4">Hospital</th>
// //                   <th className="py-3 px-4">Profile</th>
// //                   <th className="py-3 px-4">Status</th>
// //                   <th className="py-3 px-4">Timing</th>
// //                   <th className="py-3 px-4">Session</th>
// //                 </tr>
// //               </thead>
// //               <tbody>
// //                 {doctors.map((doc, index) => (
// //                   <tr key={index} className="border-b hover:bg-gray-50">
// //                     <td className="py-3 px-4 flex items-center gap-3">
// //                       <img src="/doctor-icon.png" alt="doctor" className="w-8 h-8 rounded-full" />
// //                       <div>
// //                         <p className="font-medium">{doc.name}</p>
// //                         <p className="text-sm text-gray-500">{doc.email}</p>
// //                       </div>
// //                     </td>
// //                     <td className="py-3 px-4 text-green-500 cursor-pointer hover:underline">View</td>
// //                     <td className={`py-3 px-4 font-medium ${doc.status === "Available" ? "text-green-600" : "text-red-500"}`}>
// //                       {doc.status}
// //                     </td>
// //                     <td className="py-3 px-4">{doc.time}</td>
// //                     <td className="py-3 px-4">{doc.date}</td>
// //                   </tr>
// //                 ))}
// //               </tbody>
// //             </table>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default DashboardPage;

// "use client";
// import React from "react";
// import Link from "next/link";
// import Navbar from "../../components/doctor/Navbar";
// import Sidebar from "../../components/doctor/Sidebar";

// interface Doctor {
//   name: string;
//   email: string;
//   status: "Available" | "Not Available";
//   time: string;
//   date: string;
// }

// const doctors: Doctor[] = [
//   { name: "doc 1", email: "esthera@simmmpile.com", status: "Available", time: "11:25 AM", date: "14/06" },
//   { name: "doc 2", email: "alexa@simmmpile.com", status: "Not Available", time: "11:25 AM", date: "14/06" },
//   { name: "doc 3", email: "laurent@simmmpile.com", status: "Available", time: "11:25 AM", date: "14/06" },
//   { name: "doc 4", email: "fred@simmmpile.com", status: "Not Available", time: "11:25 AM", date: "14/06" },
//   { name: "doc 5", email: "daniel@simmmpile.com", status: "Available", time: "11:25 AM", date: "14/06" },
//   { name: "doc 6", email: "mark@simmmpile.com", status: "Not Available", time: "11:25 AM", date: "14/06" },
// ];

// const DashboardPage: React.FC = () => {
//   return (
//     <div className="flex min-h-screen bg-gradient-to-b from-navy-900 to-navy-700 text-white">
//       <Sidebar />
//       <div className="flex-1 flex flex-col">
//         <Navbar />
//         <div className="p-6">
//           <h2 className="text-2xl font-semibold mb-6">Patients</h2>
//           <div className="bg-white text-black shadow-md rounded-lg overflow-hidden">
//             <table className="w-full text-left border-collapse">
//               <thead className="bg-navy-800 text-white">
//                 <tr>
//                   <th className="py-3 px-4">Hospital</th>
//                   <th className="py-3 px-4">Profile</th>
//                   <th className="py-3 px-4">Status</th>
//                   <th className="py-3 px-4">Timing</th>
//                   <th className="py-3 px-4">Session</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {doctors.map((doc, index) => (
//                   <tr key={index} className="border-b border-navy-600 hover:bg-navy-800">
//                     <td className="py-3 px-4 flex items-center gap-3">
//                       <img src="/doctor-icon.png" alt="doctor" className="w-8 h-8 rounded-full" />
//                       <div>
//                         <p className="font-medium">{doc.name}</p>
//                         <p className="text-sm text-gray-300">{doc.email}</p>
//                       </div>
//                     </td>
//                     <td className="py-3 px-4">
//                       <Link href="/doctor/graphs">
//                         <span className="text-blue-400 cursor-pointer hover:underline">View Graphs</span>
//                       </Link>
//                     </td>
//                     <td className={`py-3 px-4 font-medium ${doc.status === "Available" ? "text-green-400" : "text-red-400"}`}>
//                       {doc.status}
//                     </td>
//                     <td className="py-3 px-4">{doc.time}</td>
//                     <td className="py-3 px-4">{doc.date}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardPage;
"use client";
import React from "react";
import Link from "next/link";
// import Navbar from "../../components/doctor/Navbar";
// import Sidebar from "../../components/doctor/Sidebar";

interface Doctor {
  name: string;
  email: string;
  status: "Available" | "Not Available";
  time: string;
  date: string;
}

const doctors: Doctor[] = [
  { name: "doc 1", email: "esthera@simmmpile.com", status: "Available", time: "11:25 AM", date: "14/06" },
  { name: "doc 2", email: "alexa@simmmpile.com", status: "Not Available", time: "11:25 AM", date: "14/06" },
  { name: "doc 3", email: "laurent@simmmpile.com", status: "Available", time: "11:25 AM", date: "14/06" },
  { name: "doc 4", email: "fred@simmmpile.com", status: "Not Available", time: "11:25 AM", date: "14/06" },
  { name: "doc 5", email: "daniel@simmmpile.com", status: "Available", time: "11:25 AM", date: "14/06" },
  { name: "doc 6", email: "mark@simmmpile.com", status: "Not Available", time: "11:25 AM", date: "14/06" },
];

const DashboardPage: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-gradient-to-b from-sky-100 to-sky-300 text-gray-800">
      {/* <Sidebar /> */}
      <div className="flex-1 flex flex-col">
        {/* <Navbar /> */}

        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">Patients</h2>

          <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gradient-to-r from-sky-400 to-green-400 text-white">
                <tr>
                  <th className="py-3 px-4">Hospital</th>
                  <th className="py-3 px-4">Profile</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4">Timing</th>
                  <th className="py-3 px-4">Session</th>
                </tr>
              </thead>
              <tbody>
                {doctors.map((doc, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-200 hover:bg-sky-100 transition-colors"
                  >
                    <td className="py-3 px-4 flex items-center gap-3">
                      <img
                        src="/doctor-icon.png"
                        alt="doctor"
                        className="w-10 h-10 rounded-full border-2 border-sky-400"
                      />
                      <div>
                        <p className="font-medium">{doc.name}</p>
                        <p className="text-sm text-gray-500">{doc.email}</p>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <Link href="/doctor/graphs">
                        <span className="text-green-600 font-medium cursor-pointer hover:underline">
                          View Graphs
                        </span>
                      </Link>
                    </td>
                    <td
                      className={`py-3 px-4 font-medium ${
                        doc.status === "Available" ? "text-green-600" : "text-red-500"
                      }`}
                    >
                      {doc.status}
                    </td>
                    <td className="py-3 px-4">{doc.time}</td>
                    <td className="py-3 px-4">{doc.date}</td>
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

export default DashboardPage;

>>>>>>> 58f76a4a442130ad6a6967116a815b3592baf97f
