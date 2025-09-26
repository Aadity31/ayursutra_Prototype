
import React from "react";

interface NotificationCardProps {
  title: string;
  message: string;
  color: string; // e.g. "from-green-400 to-green-600"
}

const NotificationCard: React.FC<NotificationCardProps> = ({ title, message, color }) => {
  return (
    <div className={`p-4 rounded-xl shadow-md bg-gradient-to-r ${color} text-white`}>
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-sm">{message}</p>
    </div>
  );
};

export default NotificationCard;
