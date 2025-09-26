import React from "react";
import { Report } from "../../types";

interface ReportsTableProps {
  reports: Report[];
}

const ReportsTable: React.FC<ReportsTableProps> = ({ reports }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 overflow-x-auto">
      <table className="min-w-full text-sm">
        <thead>
          <tr>
            <th className="text-left p-2">Hospital</th>
            <th className="text-left p-2">Patients</th>
            <th className="text-left p-2">Duration</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report, idx) => (
            <tr key={idx} className="hover:bg-gray-50">
              <td className="p-2">{report.hospital}</td>
              <td className="p-2">{report.patients}</td>
              <td className="p-2">{report.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReportsTable;
