import React from "react";
import {
  FiUsers,
  FiMousePointer,
  FiShoppingCart,
  FiPackage,
} from "react-icons/fi";

interface ActiveUsersProps {
  users: number;
  clicks: number;
  sales: number;
  items: number;
}

const ActiveUsers: React.FC<ActiveUsersProps> = ({
  users,
  clicks,
  sales,
  items,
}) => {
  const metrics = [
    { label: "Users", value: users, icon: <FiUsers />, color: "text-blue-600" },
    { label: "Clicks", value: clicks, icon: <FiMousePointer />, color: "text-purple-600" },
    { label: "Sales", value: sales, icon: <FiShoppingCart />, color: "text-green-600" },
    { label: "Items", value: items, icon: <FiPackage />, color: "text-yellow-600" },
  ];

  const monthlyUsers = [50, 80, 120, 30, 250, 100, 300, 60, 180, 90, 20, 220];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const maxUsers = Math.max(...monthlyUsers);
  const yLabels = [maxUsers, maxUsers * 0.75, maxUsers * 0.5, maxUsers * 0.25, 0];

  return (
    <div className="bg-white shadow-md rounded-xl p-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Active Users Overview
      </h2>

      {/* Metric Summary */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {metrics.map((metric, idx) => (
          <div key={idx} className="flex items-center space-x-3">
            <div className={`text-xl ${metric.color}`}>{metric.icon}</div>
            <div>
              <div className="text-sm text-gray-500">{metric.label}</div>
              <div className="text-lg font-semibold text-gray-800">{metric.value}</div>
            </div>
          </div>
        ))}
      </div>

      {/* User Activity Chart */}
      <div>
        <p className="text-sm font-medium text-gray-700 mb-2">User Activity (Monthly)</p>

        <div className="flex">
          {/* Y-axis Labels */}
          <div className="flex flex-col justify-between h-80 mr-4 text-xs text-gray-400">
            {yLabels.map((val, i) => (
              <span key={i}>{Math.round(val)}</span>
            ))}
          </div>

          {/* Bar Chart */}
          <div className="relative w-full">
            {/* Gridlines */}
            <div className="absolute left-0 right-0 top-0 bottom-0 flex flex-col justify-between h-80 z-0">
              {yLabels.map((_, i) => (
                <div key={i} className="w-full border-t border-gray-200"></div>
              ))}
            </div>

            {/* Bars */}
            <div className="flex items-end gap-3 h-80 w-full relative z-10">
              {monthlyUsers.map((count, i) => {
                const heightPercent = (count / maxUsers) * 100;
                return (
                  <div key={i} className="flex flex-col items-center">
                    <div
                      className="bg-blue-600 shadow-md rounded-t w-[28px] transition-all duration-300"
                      style={{
                        height: `${heightPercent}%`,
                        minHeight: "8px", // so even small values are visible
                      }}
                      title={`${months[i]}: ${count} users`}
                    ></div>
                    <div className="text-xs text-gray-500 mt-1">{months[i]}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveUsers;
