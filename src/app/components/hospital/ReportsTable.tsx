// src/components/hospital/ReportsTable.tsx

import React from "react";
import { reportsData } from "../hospital/reportsData";
import { IconType } from "react-icons";

const ReportsTable: React.FC = () => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Reports</h2>
      <p className="text-green-600 text-sm font-medium mb-6">30 done this month</p>

      <div className="grid grid-cols-12 gap-4 font-semibold text-gray-600 border-b border-gray-200 pb-2 mb-3">
        <div className="col-span-6">Hospital</div>
        <div className="col-span-3">Patients</div>
        <div className="col-span-3">Status</div>
      </div>

      {reportsData.map((report, index) => {
        const Icon: IconType = report.icon;
        return (
          <div
            key={index}
            className="grid grid-cols-12 gap-4 items-center border-b border-gray-100 py-3 last:border-b-0"
          >
            <div className="col-span-6 flex items-center space-x-3">
              <div
                className="p-2 rounded-full"
                style={{ backgroundColor: report.color + "20" }}
              >
                <Icon size={20} color={report.color} />
              </div>
              <span className="text-gray-700 font-medium">{report.hospital}</span>
            </div>
            <div className="col-span-3 text-gray-800 font-semibold">{report.patients}</div>
            <div className="col-span-3 text-gray-500">{report.duration}</div>
          </div>
        );
      })}
    </div>
  );
};

export default ReportsTable;
