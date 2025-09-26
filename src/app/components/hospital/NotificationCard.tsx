"use client";

import React from "react";

// ✅ Props interface
interface NotificationCardProps {
  title: string;
  message: string;
  color?: string; // optional prop
}

// ✅ Functional component with explicit generic
const NotificationCard: React.FC<NotificationCardProps> = ({
  title,
  message,
  color = "from-orange-300 to-orange-500",
}) => {
  return (
    <div
      className={`bg-gradient-to-r ${color} text-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all`}
    >
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      <p className="text-sm">{message}</p>
    </div>
  );
};

export default NotificationCard;
