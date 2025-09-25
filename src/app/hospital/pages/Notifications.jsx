import React, { useState } from "react";
import NotificationCard from "../components/hospital/NotificationCard";

export default function Notifications() {
  const [notifications, setNotifications] = useState([
    { id: 1, title: "Emergency Alert", message: "Patient in ICU requires immediate attention.", read: false },
    { id: 2, title: "Feedback", message: "Patient John Doe left feedback: Excellent care!", read: false }
  ]);

  function markAsRead(id) {
    setNotifications(prev => prev.map(n => (n.id === id ? { ...n, read: true } : n)));
  }

  return (
    <div className="space-y-6 p-4">
      <h2 className="text-2xl font-semibold">Notifications</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {notifications.map(n => (
          <NotificationCard key={n.id} notification={n} onMarkRead={markAsRead} />
        ))}
      </div>
    </div>
  );
}
